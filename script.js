document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí agregamos la lógica de autenticación manual
        // Puedes agregar los correos y contraseñas de cada usuario aquí
        // Por ejemplo, la lista de usuarios y contraseñas sería algo como:
        const users = [
            { username: "marco", password: "nada" },
            { username: "usuario2", password: "contraseña2" },
            { username: "usuario3", password: "contraseña3" }
        ];

        // Función para verificar si el usuario existe y la contraseña es válida
        function authenticateUser(username, password) {
            for (const user of users) {
                if (user.username === username && user.password === password) {
                    return true;
                }
            }
            return false;
        }

        if (authenticateUser(username, password)) {
            alert("Inicio de sesión exitoso.");
            // Redirigir al usuario a la página principal después del inicio de sesión.
            // Reemplaza "ruta-de-tu-pagina-principal" con la ruta relativa de "principal.html".
            window.location.href = "principal.html"; // Reemplaza esto con la ruta correcta
        } else {
            alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
        }
    });
});

