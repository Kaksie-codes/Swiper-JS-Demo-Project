new Swiper("#swiper-1", {
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination:{
        el: "#swiper-1 .swiper-pagination",
        clickable: 'true',
    },
    lazyLoading: true,
    loop: true
})

new Swiper("#swiper-2", {
    slidesPerView: 1,
    centeredSlides:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    spaceBetween: 24,
    loop: true,
    lazyLoading: true,
    keyboard: {
        enabled: true
    },
    navigation:{
        prevEl:'#nav-left',
        nextEl: "#nav-right"
    },
    pagination:{
        el: "#swiper-2 .swiper-custom-pagination",
        clickable: true,
        renderBullet: function(index, className){
            return `<div class="${className}">
            <span class="number">${index+1}</span>
            <span class ="line"></span>
            </div>`
        }
    },
    breakpoints: {
       800: {
        slidesPerView: 1.5
       },
       1400: {
        slidesPerView: 1.5
       }
    }
})