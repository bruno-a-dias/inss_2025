class Apostila{
    constructor(){
      this.sidebar   = document.getElementById('sidebar');
      this.content   = document.getElementById('content-area');
      this.backTop   = document.getElementById('backToTop');
      this.init();
    }
  
    init(){
      /* links de página */
      document.querySelectorAll('[data-page]').forEach(a=>{
        a.onclick=e=>{
          e.preventDefault();
          this.loadPage(a.dataset.page);
          this.setActive(a);
          if(window.innerWidth<992)this.closeSidebar();
        };
      });
      /* links de seção */
      document.querySelectorAll('[data-section]').forEach(a=>{
        a.onclick=e=>{
          e.preventDefault();
          const el=document.getElementById(a.dataset.section);
          if(el)el.scrollIntoView({behavior:"smooth",block:"start"});
          if(window.innerWidth<992)this.closeSidebar();
        };
      });
      /* botão topo */
      window.onscroll=()=>this.backTop.classList.toggle('show',scrollY>300);
      this.backTop.onclick=()=>scrollTo({top:0,behavior:"smooth"});
  
      /* voltar/avançar do navegador */
      window.onpopstate=()=>this.loadPage(new URLSearchParams(location.search).get('page')||'apresentacao');
  
      /* primeira carga */
      const first = new URLSearchParams(location.search).get('page')||'apresentacao';
      this.loadPage(first);
      const link=document.querySelector(`[data-page="${first}"]`);
      if(link)this.setActive(link);
    }
  
    async loadPage(page){
      this.content.innerHTML=this.spinner();
      try{
        const html=await (await fetch(`pages/${page}.html`)).text();
        this.content.innerHTML=html;
        history.pushState({page},'',`?page=${page}`);
        scrollTo(0,0);
      }catch{
        this.content.innerHTML=this.error(page);
      }
    }
  
    setActive(el){
      document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
      el.classList.add('active');
    }
    closeSidebar(){
      bootstrap.Offcanvas.getOrCreateInstance(this.sidebar).hide();
    }
    spinner(){
      return `<div class="d-flex flex-column align-items-center justify-content-center py-5">
                <div class="spinner-border text-primary" role="status" style="width:3rem;height:3rem"></div>
                <p class="mt-3 text-muted">Carregando...</p>
              </div>`;
    }
    error(p){
      return `<div class="content-page"><div class="alert alert-danger">
                <h4 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Erro</h4>
                <p>Não foi possível carregar "${p}.html".</p></div></div>`;
    }
  }
  new Apostila();
  