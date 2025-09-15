const animatedElements = document.querySelectorAll("[data-animate]");
console.log(animatedElements)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));