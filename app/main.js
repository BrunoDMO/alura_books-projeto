let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


// [Titulo][preco][autor][imagen][alt][quantidade][categoria]

getBuscarLivrosDaAPI();
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    //console.table(livros);
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}


 