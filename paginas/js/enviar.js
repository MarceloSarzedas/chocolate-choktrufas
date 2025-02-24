const paginal = document.querySelector('.finalizar')

paginal.addEventListener('click', () => {
    function obterInformacoesCarrinho() {
        const carrinho = document.getElementById('cart');
        const itensCarrinho = carrinho.querySelectorAll('.cart-item');

        // Array para armazenar as informações
        const informacoes = [];

        // Itera sobre os itens do carrinho e remove os que têm valor null
        const itensFiltrados = Array.from(itensCarrinho).filter(item => item.getAttribute('data-product') !== null);

        itensFiltrados.forEach(item => {
            const produto = item.getAttribute('data-product');
            const precoTexto = item.querySelector('span').textContent.trim().split(' - ')[1];
            const quantidadeTexto = item.querySelector('.quantity').textContent.trim();

            // Converte as strings para números, removendo caracteres não numéricos
            const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));
            const quantidade = parseInt(quantidadeTexto, 10);

            // Verifica se tanto o preço quanto a quantidade são números válidos
            if (!isNaN(preco) && !isNaN(quantidade)) {
                const precoTotal = preco * quantidade;
                const precoTotalFormatado = precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                // Adiciona as informações ao array
                informacoes.push({
                    produto: produto,
                    preco: preco,
                    quantidade: quantidade,
                    precoTotal: precoTotal,
                    precoTotalFormatado: precoTotalFormatado
                });
            } else {
                console.error('Erro: preço ou quantidade não são números válidos.');
            }
        });

        // Armazena as informações no localStorage
        localStorage.setItem('carrinhoInformacoes', JSON.stringify(informacoes));

        // Redireciona o usuário para a próxima página
        window.location.href = '/paginas/html/pagina.html';
    }


    // Chama a função ao carregar a página
    obterInformacoesCarrinho();

    // Função para percorrer os itens do carrinho e extrair informações
    /*   function obterInformacoesCarrinho() {
          const carrinho = document.getElementById('cart');
          const itensCarrinho = carrinho.querySelectorAll('.cart-item');
  
          // Array para armazenar as informações
          const informacoes = [];
  
          // Itera sobre os itens do carrinho e remove os que têm valor null
          const itensFiltrados = Array.from(itensCarrinho).filter(item => item.getAttribute('data-product') !== null);
  
          itensFiltrados.forEach(item => {
              const produto = item.getAttribute('data-product');
              const precoTexto = item.querySelector('span').textContent.trim().split(' - ')[1];
              const quantidadeTexto = item.querySelector('.quantity').textContent.trim();
  
              // Converte as strings para números, removendo caracteres não numéricos
              const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));
              const quantidade = parseInt(quantidadeTexto, 10);
  
              // Verifica se tanto o preço quanto a quantidade são números válidos
              if (!isNaN(preco) && !isNaN(quantidade)) {
                  const precoTotal = preco * quantidade;
                  const precoTotalFormatado = precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
                  // Adiciona as informações ao array
                  informacoes.push({
                      produto: produto,
                      preco: preco,
                      quantidade: quantidade,
                      precoTotal: precoTotal,
                      precoTotalFormatado: precoTotalFormatado
                  });
              } else {
                  console.error('Erro: preço ou quantidade não são números válidos.');
              }
          });
  
          // Exibe as informações no console (pode ser modificado conforme necessário)
          console.table(informacoes);
          // Calcula e exibe a soma total dos preços
          const somaTotal = informacoes.reduce((total, item) => total + item.precoTotal, 0);
          const somaTotalFormatada = somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          console.log('Soma Total:', somaTotalFormatada);
      }
  
      // Chama a função ao carregar a página
      obterInformacoesCarrinho();
   */

});


