// const btn = document.getElementById("menu-btn");
// const menu = document.getElementById("menu");

// function navToggle() {
//   btn.classList.toggle("open");
//   menu.classList.toggle("flex");
//   menu.classList.toggle("hidden");
// }

// btn.addEventListener("click", navToggle);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // navMenu.classList.add("mb-12");
  header.classList.toggle("mb-52");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// window.onload(document.getElementById("hero-text").classList.toggle("hidden"));
