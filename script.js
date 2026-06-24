// 1. Seleciona todos os botões que têm a classe 'btn-proximo'
const avanca = document.querySelectorAll('.btn-proximo');

// 2. Passa por cada botão encontrado para aplicar o ouvinte de clique
avanca.forEach(button => {
    button.addEventListener('click', function(){
        // 3. Identifica qual elemento na tela possui a classe 'ativo' no momento
        const atual = document.querySelector('.ativo');
        
        // 4. Monta o ID do próximo passo (ex: 'passo-1') pegando o valor do atributo 'data-proximo'
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // 5. Remove a classe 'ativo' do passo que estava visível
        atual.classList.remove('ativo');

        // 6. Busca o ID do próximo passo e adiciona a classe 'ativo' para exibi-lo
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
