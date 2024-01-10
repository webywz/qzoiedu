$(function(){

	// banner
	var swiper = new Swiper('#banner .swiper-container', {
		  spaceBetween: 0,
		  // autoplay: {
			//   delay: 4500,
			//   disableOnInteraction: false,
			// },
		  pagination: {
			el: '#banner .swiper-pagination',
			clickable: true,
		  },
	});

        // 视频播放完,跳转到第二页-活动结束,去掉这个效果
        // setTimeout(function(){ swiper.slideNext(); }, 14500);


	$("#banner .swiper-slide").each(function(){
		var v_path = $(this).find(".ban_video").attr("data-path");
		console.log(v_path);
		if(  v_path !== "" ) {
			$(this).find(".ban_video video").attr("src",v_path);
		}else {
			$(this).find(".ban_video video").attr("src","");
		}
		// console.log(v_path);
	});




});