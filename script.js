document.addEventListener("DOMContentLoaded", function () {

  // Ano do rodapé
  document.getElementById("ano").textContent =
    new Date().getFullYear();

  // Elementos
  const menuLinks = document.querySelectorAll(".Menu a");
  const mainContent = document.getElementById("main-content");

  // Imagem inicial (Home)
  const homeLink = document.querySelector('.Menu a');

  if (homeLink) {
    mainContent.style.backgroundImage =
      homeLink.getAttribute("data-bg");
  }

  // Clique nos itens do menu
  menuLinks.forEach(link => {

    link.addEventListener("click", function (e) {

      e.preventDefault();

      // Troca o background
      const newBg = this.getAttribute("data-bg");

      if (newBg) {
        mainContent.style.backgroundImage = newBg;
      }

      // Descobre a seção clicada
      const destino =
        this.getAttribute("href").replace("#", "");

      // Esconde todas as seções
      document.querySelectorAll(".conteudo")
        .forEach(secao => {
          secao.classList.remove("ativo");
        });

      // Mostra apenas a seção selecionada
      const secaoSelecionada =
        document.getElementById(destino);

      if (secaoSelecionada) {
        secaoSelecionada.classList.add("ativo");
      }

    });

  });

});