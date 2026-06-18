
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("ano").textContent = new Date().getFullYear();
});

// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.Menu a');
const mainContent = document.getElementById('main-content');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // evita o comportamento padrão
    const newBg = link.getAttribute('data-bg'); // pega o valor do atributo data-bg
    mainContent.style.backgroundImage = newBg; // troca o background
  });
});