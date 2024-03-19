function successStory() {
  const swiper = new Swiper(".success-story__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".success-story__slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".success-story__slider-btn--next",
      prevEl: ".success-story__slider-btn--prev",
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

export default successStory;