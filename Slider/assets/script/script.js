const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount-1)*100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up")
  console.log("up")
})

downBtn.addEventListener("click", () => {
  changeSlide("down")
  console.log("down")
})

function changeSlide (direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  }
  if (direction === "down") {
    if (activeSlideIndex < 1) {
      activeSlideIndex = slidesCount - 1;
    } else {
      activeSlideIndex--;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}