const btnFiltrarLivros = document.querySelectorAll('.btn');

btnFiltrarLivros.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
            
    //console.table(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calculoDosLivros(livrosFiltrados);
        exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
    
}

function exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal){
    elementoComValortotalDeLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}


// const btnFiltrarLivrosDeFront = document.querySelector('#btnFiltrarLivrosFront');
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);
// function filtrarLivrosDeFront() {
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
//     console.table(livrosFiltrados);
// }


