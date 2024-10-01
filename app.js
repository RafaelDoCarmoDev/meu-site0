function pesquisar() {
    //obtem a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML="<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // inicializa uma string vazia para armazenar os resultados
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultado += `
            <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  if (!resultado) {
    resultado = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";

    }

    //Atribui os resultados gerados á seção HTML
    section.innerHTML = resultado;
}
