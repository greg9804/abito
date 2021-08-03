var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });


const menuBtn = document.querySelector(".menu-button");
const panel = document.querySelector(".navbar-panel");
const closeMenuBtn = document.querySelector(".menu-close")

menuBtn.addEventListener("click", () => {
  panel.classList.toggle("is-open");
});

closeMenuBtn.addEventListener("click", () => {
  panel.classList.toggle("is-open");
});