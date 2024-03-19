function heroSlider() {
  const swiper = new Swiper(".hero__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".hero__slider-btn--next",
      prevEl: ".hero__slider-btn--prev",
    },
  });
}

export default heroSlider;