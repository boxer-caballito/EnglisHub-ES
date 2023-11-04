const users = [
    {
      username: "usuario1",
      email: "usuario1@example.com",
      password: "contrasena1",
      question1: "¿Cuál es el nombre de tu mascota?",
      answer1: "mascota1",
      question2: "¿Cuál es tu color favorito?",
      answer2: "azul"
    },
    {
      username: "usuario2",
      email: "usuario2@example.com",
      password: "contrasena2",
      question1: "¿Cuál es el nombre de tu mejor amigo?",
      answer1: "amigo1",
      question2: "¿Cuál es tu comida favorita?",
      answer2: "pizza"
    },
    // Agregar más usuarios con sus preguntas, respuestas y contraseñas aquí
  ];
  
  function checkCredentials() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const user = users.find(u => u.username === username && u.email === email);
    if (user) {
      document.getElementById("question1").innerText = user.question1;
      document.getElementById("question2").innerText = user.question2;
      document.getElementById("password-recovery-form").style.display = "none";
      document.getElementById("security-questions").style.display = "block";
    } else {
      alert("Usuario o email incorrectos");
    }
  }
  
  function resetPassword() {
    const username = document.getElementById("username").value;
    const user = users.find(u => u.username === username);
    if (user) {
      const answer1 = document.getElementById("answer1").value;
      const answer2 = document.getElementById("answer2").value;
      if (user.answer1 === answer1 && user.answer2 === answer2) {
        alert("Tu contraseña es: " + user.password);
      } else {
        alert("Respuestas de seguridad incorrectas");
      }
    }
  }
  
  





