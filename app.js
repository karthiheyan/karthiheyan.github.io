// scroll Navbar Start

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll Navbar End

// Responcive Navbar Mobile Start

const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Responcive Navbar Mobile End
