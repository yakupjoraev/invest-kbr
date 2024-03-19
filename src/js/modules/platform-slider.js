function platformSlider() {
  const swiper = new Swiper(".platform__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".platform__slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".platform__slider-btn--next",
      prevEl: ".platform__slider-btn--prev",
    },

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 640px
      1100: {
        slidesPerView: 2,
        spaceBetween: 32
      }
    }
  });
}

export default platformSlider;