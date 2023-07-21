// ? this is about header-Slider ...
const slideImages = document.getElementById("slide_images");
const headerSliderImages = [
  "https://www.boat-lifestyle.com/cdn/shop/files/IM-141_desktop_1440x.jpg?v=1689750428",
  "https://www.boat-lifestyle.com/cdn/shop/files/ADMAX_desktop_1499_1440x.jpg?v=1689662385",
  "https://www.boat-lifestyle.com/cdn/shop/files/wave-call--Desktop_1299_1440x.jpg?v=1689359948",
  "https://www.boat-lifestyle.com/cdn/shop/files/AD115-_DESKTOP-_3_1440x.jpg?v=1689577946",
];

let currentSlide = 0;

function showSlide(slideIndex) {
  slideImages.src = headerSliderImages[slideIndex];
}

function createDots() {
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("carousel-dots");

  headerSliderImages.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });

  // Highlight the active dot
  dotsContainer.children[currentSlide].classList.add("active");

  return dotsContainer;
}

const headerDivSlider = document.getElementById("header_div_slider");
const dots = createDots();
headerDivSlider.appendChild(dots);

function updateDots() {
  const dotElements = dots.querySelectorAll(".carousel-dot");
  dotElements.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % headerSliderImages.length;
  showSlide(currentSlide);
  updateDots();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + headerSliderImages.length) % headerSliderImages.length;
  showSlide(currentSlide);
  updateDots();
}

// Show the initial slide
showSlide(currentSlide);

// Auto-slide functionality
setInterval(nextSlide, 3000);

// Manual navigation with arrow buttons
const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");

leftArrow.addEventListener("click", () => {
  prevSlide();
});

rightArrow.addEventListener("click", () => {
  nextSlide();
});