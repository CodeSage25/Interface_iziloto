// ===== CAROUSEL: pause on hover, resume on leave =====
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");

  if (!carousel) return;

  carousel.addEventListener("mouseenter", () => {
    carousel.classList.add("paused");
  });

  carousel.addEventListener("mouseleave", () => {
    carousel.classList.remove("paused");
  });

  // Touch support for mobile
  carousel.addEventListener("touchstart", () => {
    carousel.classList.add("paused");
  });

  carousel.addEventListener("touchend", () => {
    carousel.classList.remove("paused");
  });
});
