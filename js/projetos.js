// js/projetos.js - Template JS para renderizar os cards de projeto (REQUISITO ETAPA 3)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Localiza o contêiner onde os projetos serão inseridos
    const listaProjetos = document.getElementById('lista-projetos');
    
    if (listaProjetos && typeof projetosData !== 'undefined') {

        // 2. Itera sobre a lista de dados (de data.js)
        projetosData.forEach(projeto => {
            // 3. Cria o HTML do Card (o Template)
            const cardHTML = `
                <div class="col-6 col-12-mobile">
                    <div class="card">
                        <img src="${projeto.imagem}" alt="${projeto.alt}">
                        <h3>${projeto.titulo}</h3>
                        <p>${projeto.descricao}</p>
                        <a href="#" class="btn btn-secondary">Detalhes</a>
                    </div>
                </div>
            `;
            
            // 4. Insere o HTML gerado no contêiner
            listaProjetos.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
});