


const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    width: 20,
    height: 20,

  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }
  }).init();