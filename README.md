# 🌟 ONG Cidadã: Projeto de Desenvolvimento Front-End (Entrega Final)

Este repositório contém o projeto desenvolvido para a disciplina de Front-End, focado na criação de um site institucional completo para uma ONG de ação social. O projeto integra boas práticas de HTML, CSS, JavaScript, Acessibilidade e Versionamento Semântico.

---

## 🔗 Site em Produção (Link de Acesso)

A versão final do projeto pode ser acessada publicamente através do link de *deploy* (GitHub Pages):

**[Acesse o Site da ONG Cidadã Aqui!](https://hevelly-pixel.github.io/site-ong/)**

---

## ⚙️ Arquitetura e Estrutura do Projeto

O projeto segue um padrão de organização modular, separado por responsabilidades:

* **`index.html`**, **`projetos.html`**, **`cadastro.html`**: Estrutura semântica das páginas.
* **`css/`**: Contém a estilização completa, dividida em módulos:
    * **`style.css`**: Layout principal e Design System.
    * **`acessibilidade.css`**: Regras específicas para modos de contraste e temas de usuário (Etapa 4).
* **`js/`**: Contém a lógica de interatividade:
    * **`cadastro.js`**: Implementa a validação de formulário.
    * **`projetos.js`**: Implementa o uso de *templates* JavaScript para carregar dinamicamente a lista de projetos.

---

## ✅ Entregáveis e Boas Práticas (Etapas 1, 2, 3 e 4)

Este projeto foi construído sobre os pilares do desenvolvimento moderno, cumprindo os requisitos de todas as etapas:

### 1. Estrutura e Estilização (Etapas 1 e 2)
* **HTML Semântico:** Utilização correta de tags (`<header>`, `<main>`, `<section>`, `<footer>`) para SEO e acessibilidade.
* **Design System:** Criação de classes e variáveis de estilo (`.container`, `.btn`, etc.) para manter a consistência visual.
* **Responsividade:** O layout é totalmente responsivo, garantindo a visualização perfeita em dispositivos móveis e desktops.

### 2. Interatividade (Etapa 3)
* **JavaScript Modular:** Separação da lógica de validação (`cadastro.js`) e da lógica de apresentação de dados (`projetos.js`).
* **Templates JS:** Utilização de JavaScript para injetar dinamicamente o conteúdo da lista de projetos, simulando a comunicação com um backend.

### 3. Qualidade e Entrega Profissional (Etapa 4)
* **Acessibilidade (WCAG 2.1 AA):** Implementação de foco visual (`outline:focus`) claro e preparação para **Prevenção de Tema** (modo escuro/alto contraste) através do link condicional no HTML.
* **Controle de Versão (Git/GitHub):** O projeto segue a prática de *Commits Semânticos* e foi marcado com a **Release final `v1.0.0`**.

---

### 🚀 Como Visualizar o Projeto

Para inspecionar o código ou ver a aplicação:
1.  Acesse o **Link de Produção** fornecido acima.
2.  Para inspecionar o código-fonte, navegue pelas pastas neste repositório.