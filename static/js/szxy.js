$(function(){
    var swiperData = new Swiper('.homef .DataList', {
        slidesPerView: 2,
        spaceBetween: 0,
        speed:1000,
        autoplay: { delay: 4000,stopOnLastSlide: false,disableOnInteraction: false,},
        centeredSlides : true,
        centeredSlidesBounds: true,
        loop:true,
        pagination: {
            el: '.homef .DataList .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.homef .slide-btn .next',
            prevEl: '.homef .slide-btn .prev',
        },
        //watchOverflow: true,
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 5,
            }
        },
        on: {
            init: function(swiper){
                $('.counts').countUp({delay: 20,time: 2000});

            },
        },
    });

})