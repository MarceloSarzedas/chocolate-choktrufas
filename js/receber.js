
// Recupera as informações do localStorage
const carrinhoInformacoes = JSON.parse(localStorage.getItem('carrinhoInformacoes'));

// Verifica se há informações no carrinho
if (carrinhoInformacoes) {
    const tabelaCorpo = document.getElementById('tabela-corpo');

    // Itera sobre as informações e cria as linhas da tabela
    carrinhoInformacoes.forEach(item => {
        const row = tabelaCorpo.insertRow();
        row.insertCell(0).textContent = item.produto;
        row.insertCell(1).textContent = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        row.insertCell(2).textContent = item.quantidade;
        row.insertCell(3).textContent = item.precoTotalFormatado;
    });

    // Calcula e exibe a soma total dos preços
    const somaTotal = carrinhoInformacoes.reduce((total, item) => total + item.precoTotal, 0);
    const somaTotalFormatada = somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const somaTotalQuantidade = carrinhoInformacoes.reduce((total, item) => total + item.quantidade, 0);
    // Exibe a soma total no parágrafo com o id "soma-total"
    document.getElementById('soma-total').textContent = `Total: ${somaTotalFormatada}`;
    document.getElementById('soma-total').textContent += ` (${somaTotalQuantidade} itens)`;
} else {
    console.error('Erro: Não há informações no carrinho.');
}



