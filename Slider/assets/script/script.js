const slides = document.querySelectorAll(".slide");

for (let slide of slides) {
  slide.addEventListener("mouseover", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
  slide.addEventListener("mouseout", () => {
    clearActiveClasses();
  });
};

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};