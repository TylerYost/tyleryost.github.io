document.getElementById("y").textContent = String(new Date().getFullYear());

const reveal = document.querySelectorAll(".section");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  reveal.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(0.85rem)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveal.forEach((el) => io.observe(el));
}
