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

const heroParagraph = document.querySelectorAll(".hero-paragraph");

for (let index = 0; index < heroParagraph.length; ) {
  const element = heroParagraph[index];
  setTimeout(() => {
    const item = document.getElementById(`p-${index}`);
    console.log(item);
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  }, 4000);
  index++;
}

// section animation

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

window.onload = setTimeout(() => {
  document.getElementById("p-1").classList.add("translate-y-5");

  document.getElementById("p-1").classList.add("duration-1000");
  document.getElementById("p-1").classList.remove("opacity-0");

  console.log("works");
}, 2000);

let textSplit = new SplitType("#hero-text");
let characters = document.querySelectorAll(".char");

for (let index = 0; index < characters.length; index++) {
  characters[index].classList.add("translate-y-full");
}

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.02,
  duration: 0.5,
});

// var copy = document.querySelector(".logos-slide");
// document.querySelector(".logos").append(copy);

// console.log(copy);
