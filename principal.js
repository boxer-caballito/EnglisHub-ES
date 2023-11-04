const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');
const navbarLinks = document.querySelectorAll('.navbar-menu a');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  });
});
