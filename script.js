const swiper = new Swiper(' #checkout .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  freeMode: true,
  slidesPerView: 4,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
   
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView:2,
      spaceBetween: 40,
    },
    
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    200: {
      slidesPerView:1,
      spaceBetween: 5,
    },
  }
});

let custom=document.querySelector(".custom");
let part=document.querySelector("#banifits");

part.addEventListener('mousemove',function(e){
  custom.style.opacity=1;
var x=e.clientX;
var y=e.clientY;

custom.animate({
  left:x-50+"px",
  top:y-100+"px"

},{
  duration:1500,fill:"forwards"
})

});
part.addEventListener('mouseenter',function(){
custom.style.opacity=1;

});
part.addEventListener('mouseleave',function(){
  custom.style.opacity=0;
  });