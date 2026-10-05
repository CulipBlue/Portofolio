const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

themeToggle.addEventListener("click", () => {
  const theme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.classList.toggle("is-open", !isOpen);
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
  });
});

const revealElements = document.querySelectorAll(".reveal");
if (reducedMotion.matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealElements.forEach((element) => observer.observe(element));
}

const phrases = ["building payment microservices", "integrating banking APIs", "processing reliable transactions"];
const typedText = document.querySelector(".typed-text");
let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typePhrase() {
  if (reducedMotion.matches) {
    typedText.textContent = phrases[0];
    return;
  }
  const phrase = phrases[phraseIndex];
  characterIndex += deleting ? -1 : 1;
  typedText.textContent = phrase.slice(0, characterIndex);
  let delay = deleting ? 35 : 65;
  if (!deleting && characterIndex === phrase.length) {
    deleting = true;
    delay = 1600;
  } else if (deleting && characterIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }
  window.setTimeout(typePhrase, delay);
}

typePhrase();
document.querySelector("#current-year").textContent = new Date().getFullYear();
