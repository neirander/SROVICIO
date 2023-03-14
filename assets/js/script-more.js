// seletor para encontrar todos os links "More"
var moreLinks = document.querySelectorAll('.news-content a[href="#more"]');

// loop através de todos os links "More"
moreLinks.forEach(function (link) {
  // adicionar um evento de clique ao link
  link.addEventListener("click", function (e) {
    e.preventDefault(); // impedir o comportamento padrão do link

    // encontrar a div pai
    var titleNews = this.closest(".news-content");

    // encontrar a div conteudo-noticia dentro da div pai
    var newsContent = titleNews.querySelector(".conteudo-noticia");

    // remover a classe "active" de todas as outras divs conteudo-noticia
    var allNewsContent = document.querySelectorAll(".conteudo-noticia");
    allNewsContent.forEach(function (content) {
      content.classList.remove("active");
    });

    // adicionar ou remover a classe "active" da div clicada
    newsContent.classList.toggle("active");
  });
});
