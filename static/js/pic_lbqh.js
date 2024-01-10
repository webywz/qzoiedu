$(function(){

var Ctrlyear = new Swiper(".Ctrlyear", {
 loopedSlides:8,
 loop: !0,
 autoHeight:true,
watchSlidesProgress: !0,
spaceBetween: 15,
 speed: 1E3,
  //  controller: {
  //   control:slideHd,
  // },
navigation: {
      nextEl: ".homec .next",
      prevEl: ".homec .prev"
    },
})



  var slideHd = new Swiper(".slideHd", {
    loop: !0,
    loopedSlides: 8,
    slidesPerView: "auto",
    autoplay: {delay: 5000,stopOnLastSlide: false,disableOnInteraction: false},
    centeredSlides: !0,
    watchSlidesProgress: !0,
    speed: 1E3,
 //   navigation: {
   //   nextEl: ".homec .next",
    //  prevEl: ".homec .prev"
  // },
 //    controller: {
 //    control:Ctrlyear,
 // },
    
    on: {
      progress: function(a) {
         var docWb = $(window).width();
        for (i = 0; i < this.slides.length; i++) {
          a = this.slides.eq(i);
          var b = this.slides[i].progress;
          if (1 < Math.abs(b)) var l = .4 * (Math.abs(b) - 1) + 1;
          translate = b * l * 365 + "px";
            if(docWb<1500){
          translate = b * l * 330 + "px";
          };
           if(docWb<1280){
          translate = b * l * 238 + "px";
          };
            if(docWb<980){
          translate = b * l * 200 + "px";
          };
            if(docWb<600){
          translate = b * l * 90 + "px";
          };

          scale = 1 - Math.abs(b) / 4;
          zIndex = 999 - Math.abs(Math.round(10 * b));
          a.transform("translateX(" + translate + ") scale(" + scale + ")");
          a.css("zIndex", zIndex);
          a.css("opacity", 1);
          3 < Math.abs(b) && a.css("opacity", 0)
        }
      },
      setTransition: function(a) {
        for (var b = 0; b < this.slides.length; b++) this.slides.eq(b).transition(a)
      }
    }
  });
 Ctrlyear.controller.control = slideHd;
slideHd.controller.control = Ctrlyear;

  slideHd.el.onmouseover = function() {
    slideHd.autoplay.stop()
  };
  slideHd.el.onmouseout = function() {
    slideHd.autoplay.start()
  };
   if (window.ActiveXObject || "ActiveXObject" in window){
    console.log('ie');
    //return false;
   }else{
      var g = [];
  $(".sico svg").each(function(a, b) {
    a = $(this).attr("id");
    g[a] = new Vivus(a, {
      type: "delayed",
      duration: 60,
      //start: "autostart",
      //inViewport: !0
    })
  });
  $(".sico").mouseenter(function() {
   g[$(this).find("svg").attr("id")].reset().play()
  });
   }



})