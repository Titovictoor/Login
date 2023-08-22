const password = document.querySelector(".password");
const eye = document.querySelector(".eye");
const btnLogin = document.querySelector(".btn-login");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  } else {
    password.type = "password";
    eye.innerHTML = '<i class="bi bi-eye-fill"></i>';
  }
});