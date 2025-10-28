// js/cadastro.js - Sistema de verificação de consistência de dados (REQUISITO ETAPA 3)

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formCadastro');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Previne o envio padrão do formulário para que possamos validar
            event.preventDefault(); 
            
            // Remove mensagens de erro anteriores
            const errosAnteriores = document.querySelectorAll('.aviso-erro');
            errosAnteriores.forEach(erro => {
                erro.remove();
            });

            let isValido = true;
            
            // 1. Validação Simples de Campos Vazios
            const inputs = form.querySelectorAll('input:required, textarea:required');
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    isValido = false;
                    exibirAviso(input, 'Este campo é obrigatório.');
                } else {
                    input.style.border = ''; 
                }
            });

            // 2. Validação de E-mail
            const emailInput = form.querySelector('input[name="email"]');
            if (emailInput && emailInput.value.trim() !== '' && !validarEmail(emailInput.value)) {
                isValido = false;
                exibirAviso(emailInput, 'Por favor, insira um endereço de e-mail válido.');
            }

            // 3. Validação de Senha (Exemplo: Mínimo de 6 caracteres)
            const senhaInput = form.querySelector('input[type="password"]');
            if (senhaInput && senhaInput.value.trim() !== '' && senhaInput.value.length < 6) {
                isValido = false;
                exibirAviso(senhaInput, 'A senha deve ter no mínimo 6 caracteres.');
            }

            if (isValido) {
                alert('🎉 Cadastro realizado com sucesso! Pronto para a Etapa 3!');
                form.reset(); 
            }
        });
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function exibirAviso(elemento, mensagem) {
        const erro = document.createElement('div');
        erro.className = 'aviso-erro';
        erro.style.color = '#dc3545'; 
        erro.style.fontSize = '0.85rem';
        erro.style.marginTop = '4px';
        erro.textContent = mensagem;

        elemento.parentNode.insertBefore(erro, elemento.nextSibling);
        elemento.style.border = '1px solid #dc3545';
    }
});