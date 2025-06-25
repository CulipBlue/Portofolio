// Fade-in effect on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Tambahan: fade-in untuk .fade-in selain section
window.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');
  const onScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});
