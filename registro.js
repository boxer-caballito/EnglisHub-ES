document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const registrationMessage = document.getElementById("registration-message");
    const backToRegistrationBtn = document.getElementById("back-to-registration-btn");
    const registerTitle = document.querySelector(".from h2");

    // Registrar el nuevo usuario al enviar el formulario de registro
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulando el proceso de registro
        registerForm.style.display = "none";
        registerTitle.style.display = "none";
        registrationMessage.style.display = "block";
    });

    // Volver a la página de registro cuando se hace clic en el botón
    backToRegistrationBtn.addEventListener("click", function () {
        registrationMessage.style.display = "none";
        registerForm.style.display = "block";
        registerTitle.style.display = "block";
    });
});


