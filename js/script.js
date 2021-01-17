var mySwiper = new Swiper('.image-slider', {

  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    // Customs bullets
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + ( index + 1 ) + '</span>';
    // }
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});