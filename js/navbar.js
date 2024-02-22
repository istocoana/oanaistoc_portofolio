document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const navbarToggler = document.getElementById('navbar-toggler');
  const navbarMenu = document.getElementById('navbar-menu');

  navbarToggler.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
