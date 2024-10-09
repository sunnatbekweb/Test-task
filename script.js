var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
