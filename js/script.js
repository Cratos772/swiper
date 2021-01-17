var mySwiper = new Swiper('.image-slider', {

  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});