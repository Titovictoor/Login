const password = document.querySelector(".password");
const eye = document.querySelector(".eye");
const btnLogin = document.querySelector(".btn-login");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    btn.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  } else {
    password.type = "password";
    btn.innerHTML = '<i class="bi bi-eye-fill"></i>';
  }
});