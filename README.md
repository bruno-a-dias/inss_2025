# inss_2025
Apostila de estudos para concurso do INSS 2025.

[👉Abra o site aqui👈](https://bruno-a-dias.github.io/inss_2025/)


# 1. Introdução
Este projeto é uma apostila de estudos digital e interativa, desenvolvida para auxiliar na preparação para o concurso do Instituto Nacional do Seguro Social (INSS). A aplicação web foi construída com foco em uma navegação fluida, conteúdo organizado e funcionalidades interativas para testar o conhecimento do usuário.

Todo o conteúdo foi estruturado com base nos tópicos do edital, abrangendo tanto os conhecimentos básicos quanto os específicos, e é apresentado de forma clara e didática, utilizando componentes visuais para facilitar a aprendizagem.

# 2. Funcionalidades Principais
Navegação Dinâmica: O conteúdo dos tópicos é carregado dinamicamente na página principal sem a necessidade de recarregar a página, proporcionando uma experiência de usuário rápida e contínua.

Menu Lateral Responsivo: Um menu lateral (off-canvas) permite uma navegação fácil e organizada por todos os 20 tópicos e seus respectivos sub-tópicos.

Conteúdo Estruturado: Cada tópico é dividido em sub-tópicos com explicações detalhadas, exemplos práticos e exercícios comentados ao final de cada módulo.

Simulado Interativo: Um simulado geral no estilo da banca Cebraspe, com correção automática, cálculo de pontuação (acertos - erros) e gabarito comentado.

Design Limpo e Responsivo: Utiliza Bootstrap 5 para garantir que a apostila seja acessível e visualmente agradável em qualquer dispositivo (desktops, tablets e smartphones).

Botão "Voltar ao Topo": Facilita a navegação em páginas de conteúdo mais longo.

# 3. Estrutura de Arquivos
O projeto está organizado da seguinte forma:
/
|-- index.html              # O arquivo principal que carrega toda a aplicação
|-- README.md               # Este arquivo de documentação
|
|-- css/
|   |-- style.css           # Arquivo de estilos personalizados
|
|-- js/
|   |-- script.js           # Script principal para carregar o conteúdo e funcionalidades
|   |-- simulado.js         # Script específico para a lógica do simulado
|
|-- pages/
|   |-- apresentacao.html
|   |-- etica-conceitos.html
|   |-- constitucional-principios.html
|   |-- ... (todos os outros arquivos .html com o conteúdo de cada tópico)

index.html: É a "casca" da aplicação. Ele contém a estrutura principal, a barra de navegação e o menu lateral.

css/style.css: Contém os estilos visuais personalizados para a apostila, complementando o Bootstrap.

js/script.js: Responsável por interceptar os cliques no menu e carregar dinamicamente o conteúdo dos arquivos da pasta pages/ na área principal.

js/simulado.js: Contém a lógica exclusiva do simulado interativo.

pages/: Esta pasta armazena todo o conteúdo dos tópicos em arquivos HTML separados, o que mantém o projeto organizado e fácil de atualizar.

# 4. Como Utilizar
Para rodar este projeto localmente, siga os passos abaixo:

Baixe os Arquivos: Faça o download de todos os arquivos e pastas do projeto e mantenha a estrutura de diretórios.

Abra o index.html: A forma mais simples de visualizar a apostila é abrir o arquivo index.html diretamente em seu navegador de preferência (Google Chrome, Firefox, etc.).

Use um Servidor Local (Recomendado): Para evitar possíveis problemas de segurança (CORS) ao carregar arquivos locais, é recomendado usar um servidor local. Se você tem o Visual Studio Code, pode instalar a extensão "Live Server":

Instale a extensão "Live Server" na loja do VS Code.

Abra a pasta do projeto no VS Code.

Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

Isso abrirá a apostila em seu navegador em um endereço como http://127.0.0.1:5500/index.html.

# 5. Tecnologias Utilizadas
HTML5: Para a estruturação do conteúdo.

CSS3: Para a estilização visual personalizada.

Bootstrap 5: Framework CSS para criar um design responsivo e moderno.

Font Awesome: Para os ícones utilizados na interface.

JavaScript (Vanilla): Para a interatividade, carregamento dinâmico de conteúdo e a lógica do simulado.