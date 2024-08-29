// SLIDER
let screenWidth = window.innerWidth;
const splideOptions = {
  autoplay: true,
  arrows: false,
  drag: false,
  pauseOnHover: false,

  interval: 5000,
  speed: 1100,
  focus: "center",
  slideFocus: true,
  type: "loop",
  fixedWidth: "60vw",
  fixedHeight: "70vh",
  gap: "12px",

  breakpoints: {
    1300: {
      fixedWidth: "70vw",
      fixedHeight: "80vh",
    },
    768: {
      fixedWidth: screenWidth,
      fixedHeight: "70vh",
      drag: true,
      arrows: false,
      gap: "12px",
    },
    480: {
      fixedHeight: "50vh",
    },
  },
};

new Splide(".splide", splideOptions).mount();

// MENU MOBILE
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let header = document.querySelector("header");
  menuMobile.classList.toggle("none");
  header.classList.toggle("active");
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    menuShow();
  });
});
