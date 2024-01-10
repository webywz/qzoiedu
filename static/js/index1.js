$(document).ready(function() {

/* 内层图片滚动切换 */
jQuery(".slideGroup .slideBox").slide({ mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:4000,
});
jQuery(".banner").slide({ mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:1000,
});
/* 外层tab切换 */
jQuery(".slideGroup").slide({titCell:".parHd li",mainCell:".parBd"});
jQuery(".slideNews").slide({titCell:".parHd li",mainCell:".parBd"});





 $('#mainPage').fullpage({
   // scrollOverflow:true,
    scrollingSpeed:700,
    easing:'easeIn',
    // anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8','page9','page10'],
    menu: '#menu',
    navigation: true,
    afterRender:function( index){
      console.log(index)
    }
  });

// setInterval(function(){
//         $.fn.fullpage.moveSlideRight();
//     }, 5000);
$(".Tonext").click(function(){
$.fn.fullpage.moveSectionDown()
})
 // $(window).resize(function(){
 //        autoScrolling();
 //    });

 //    function autoScrolling(){
 //        var $ww = $(window).width();
 //        if($ww <= 1280){
 //            $.fn.fullpage.setAutoScrolling(false);
 //        } else {
 //            $.fn.fullpage.setAutoScrolling(true);
 //        }
 //    }

 //    autoScrolling();



   $(".more2 div:eq(0)").show();
    $(".slideGroup .parHd ul li").hover(function() {
       
        $(".more2 div").hide().eq($(this).index()).show();
  
    });

   


})