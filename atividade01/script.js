document.addEventListener("DOMContentLoaded", function() {
  // Formulário de doação
  const formDoacao = document.getElementById("form-doacao");
  const mensagemDoacao = document.getElementById("mensagem-doacao");

  formDoacao.addEventListener("submit", function(event) {
    event.preventDefault();
    mensagemDoacao.style.display = "block";
    formDoacao.reset();
  });

  // Formulário de voluntário
  const formVoluntario = document.getElementById("form-voluntario");
  const mensagemVoluntario = document.getElementById("mensagem-voluntario");

  formVoluntario.addEventListener("submit", function(event) {
    event.preventDefault();
    mensagemVoluntario.style.display = "block";
    formVoluntario.reset();
  });
});
