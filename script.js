var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      280:{
        slidesPerView:1,
        spaceBetween: 10,
      },
      320:{
        slidesPerView:2,
        spaceBetween: 10,
      },
      510:{
        slidesPerView:2,
        spaceBetween: 10,
      },
      758:{
        slidesPerView:3,
        spaceBetween: 15,
      },
      900:{
        slidesPerView:4,
        spaceBetween: 20,
      },
    }
  });

let PlayBtn = document.querySelector('.play-movie')
let video = document.querySelector('.video-container') 
let closeBtn = document.querySelector('.close-video')
let myVideo = document.querySelector('#myvideo')

PlayBtn.addEventListener('click' , function () {
  video.classList.add('show')
  myVideo.play()
})

closeBtn.addEventListener("click",function () {
  video.classList.remove('show')
  myVideo.pause()
})