class Apostila {
  constructor() {
      this.sidebar = document.getElementById('sidebar');
      this.content = document.getElementById('content-area');
      this.backTop = document.getElementById('backToTop');
      this.init();
  }

  init() {
      // Event delegation for sidebar links
      this.sidebar.addEventListener('click', (e) => this.handleSidebarClick(e));

      // Back to top button
      window.addEventListener('scroll', () => this.toggleBackToTop());
      this.backTop.addEventListener('click', () => this.scrollToTop());

      // Handle browser back/forward buttons
      window.addEventListener('popstate', (e) => this.handlePopState(e));

      // Initial page load
      const initialPage = new URLSearchParams(location.search).get('page') || 'apresentacao';
      this.loadPage(initialPage, false);
  }

  handleSidebarClick(e) {
      const pageLink = e.target.closest('[data-page]');
      if (pageLink) {
          e.preventDefault();
          this.loadPage(pageLink.dataset.page, true);
          if (window.innerWidth < 992) {
              bootstrap.Offcanvas.getOrCreateInstance(this.sidebar).hide();
          }
      }
  }

  handlePopState(e) {
      const page = e.state ? e.state.page : 'apresentacao';
      this.loadPage(page, false);
  }

  async loadPage(page, pushState = true) {
      this.content.innerHTML = this.getSpinner();
      try {
          const response = await fetch(`pages/${page}.html`);
          if (!response.ok) throw new Error('Página não encontrada');
          const html = await response.text();
          this.content.innerHTML = html;
          
          if (pushState) {
              history.pushState({ page }, '', `?page=${page}`);
          }
          this.updateActiveLink(page);
          this.scrollToTop(false);
      } catch (error) {
          this.content.innerHTML = this.getError(page, error);
      }
  }

  updateActiveLink(page) {
      this.sidebar.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

      const activeLink = this.sidebar.querySelector(`[data-page="${page}"]`);
      if (activeLink) {
          activeLink.classList.add('active');

          const parentCollapse = activeLink.closest('.collapse');
          if (parentCollapse) {
              const toggleLink = this.sidebar.querySelector(`a[href="#${parentCollapse.id}"]`);
              if (toggleLink) {
                  toggleLink.classList.add('active');
                  if (!parentCollapse.classList.contains('show')) {
                      new bootstrap.Collapse(parentCollapse).show();
                  }
              }
          }
      }
  }

  toggleBackToTop() {
      this.backTop.classList.toggle('show', window.scrollY > 300);
  }

  scrollToTop(smooth = true) {
      window.scrollTo({
          top: 0,
          behavior: smooth ? 'smooth' : 'auto'
      });
  }

  getSpinner() {
      return `<div class="d-flex flex-column align-items-center justify-content-center py-5">
                <div class="spinner-border text-primary" role="status" style="width:3rem;height:3rem"></div>
                <p class="mt-3 text-muted">Carregando...</p>
              </div>`;
  }

  getError(page, error) {
      return `<div class="alert alert-danger mx-3">
                <h4 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Erro ao Carregar</h4>
                <p>Não foi possível carregar a página <strong>${page}.html</strong>.</p>
                <hr>
                <p class="mb-0 small">Verifique se o arquivo existe na pasta 'pages' e se o servidor está funcionando. (${error.message})</p>
              </div>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Apostila();
});
