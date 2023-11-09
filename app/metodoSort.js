let btnOrdernarPorPreco = document.querySelector('#btnOrdenarPorPreco');
btnOrdernarPorPreco.addEventListener('click', ()=>{
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); // ordena do menor para o maior com função no sort
    exibirOsLivrosNaTela(livrosOrdenados);
})