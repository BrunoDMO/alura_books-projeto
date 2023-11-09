function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // ... faz copia de todos livros e altera o preço
    })
    console.log('aplicou desconto');
    return livrosComDesconto
}