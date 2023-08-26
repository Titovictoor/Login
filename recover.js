const submit = document.querySelector(".form-recover");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Check your email");
    window.location.href = "/Login";

})