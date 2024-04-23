// nav-bar header sticky on scroll
window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 10);
  });
});

//   Burger Menu
const burger = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});
