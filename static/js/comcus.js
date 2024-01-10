$(function(){
	/*var articleUrl = '/_s2/_t1348/lmtp/list.psp';
	 $.ajax({
	 url: articleUrl,
	 type: 'POST',
	 contentType: "application/x-www-form-urlencoded; charset=utf-8",
	 async: true,
	 dataType: 'html',
	 success: function(result){
	 var $results = $(result);
	 var $wpmenu = $(".head .wp-menu");
	 var $wpmenus = $(".body_b .wp-menu");
	 $results.find(".subdatas .nav_bg").each(function(index,el){
	 $wpmenu.find(".menu-item").eq(index).find(".sub_img").append(el);
	 });
	 $results.find(".subdata .nav_bg").each(function(index,el){
	 $wpmenus.find(".menu-item").eq(index).find(".sub_img").append(el);
	 });
	 }
	 });*/
	$(".search-submit").click(function(event){
		$(this).removeAttr("name");
		event.preventDefault();
		var val = $.trim($(".search-title").val());
		if(val!==""){
			$(".wp-search").find("form").submit();
		}else{
			alert("请输入关键词");
		}
		return false;
	});

	$(".searchbtn").click(function(){
		$(".searchbox").show();
	});
	$(".searchbox .close").click(function(){
		$(".searchbox").hide();
	});
	$(".body_b").mousewheel(function(event, delta, deltaX, deltaY){
		if(delta>0 && $(".body_b").scrollTop()==0){
			//$(".home").removeClass("leave");
			$(".head").addClass("showdiv");
			$(".body_b").removeClass("showdiv");
			// $(".header").removeClass("mobile")
			$(".home5").removeClass("showdiv");
			if($(".body_b").css("position")=="fixed")$(".header").removeClass("mobile");
			//$(".nav_r").removeClass("showdiv");

		}
		if(deltaY<0 && $(".body_b").scrollTop()+$(window).height()>=$(".body_b .scroll").height()){
			//$(".rr").click();
			//setTimeout(function(){
			//$(".body_b").scrollTop(0);
			//},1250);
		}
		if(deltaY>0){
			$(".body_b .top").removeClass("lit");
		}
		if(deltaY<0){
			$(".body_b .top").addClass("lit");
		}
	});
	/*导航*/
	/*$.fn.sudyNav = function(){};
	 $(".wp-menu li").hover(function() {
	 $(this).siblings().find('.sub-menu').stop(true,true).slideUp(150)
	 $(this).children('.sub-menu').stop(true,true).slideDown(200);
	 $(this).addClass('hover');
	 }, function() {
	 $(this).children('.sub-menu').stop(true,true).slideUp(150);
	 $(this).removeClass('hover');
	 });

	 $(".wp-menu li").each(function(){
	 $(this).children(".menu-switch-arrow").appendTo($(this).children(".menu-link"));
	 });*/


	/*媒体链接*/
	$(".shares li").each(function(){
		$(this).children("a").hover(function(){
			$(this).parent().find(".con").stop(true,true).fadeIn();
		},function(){
			$(this).parent().find(".con").stop(true,true).fadeOut();
		});
	});
});