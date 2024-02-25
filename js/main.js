new Swiper('.item__category .swiper',{
  autoplay: {
    delay: 4000
  },
  loop: true,
  pagination:{
    el: '.item__category .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.item__category .swiper-prev',
    nextEl: '.item__category .swiper-next'
  },
  allowTouchMove: false
});

new Swiper('.new-arrival .new-card-section .swiper',{
  slidesPerView : 3,
  //autoplay: true,
  loop: true
})