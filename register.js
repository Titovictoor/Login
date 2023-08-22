const done = document.querySelector(".button");
const input = document.querySelectorAll(".form-login > input");
const form = document.querySelector(".form-login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cadastro concluído!");
  window.location = "/";
});
