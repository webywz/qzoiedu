/*
 *构建SDAPP
 */
SDAPP = (function(){
	function App(options){
		this.O = options;
		this.J = jQuery;
		this.init();
	}
	return App;
})();

SDAPP.prototype.init = function(){
	this.client();
	this.plugin();
	this.renew();
}

/**
 * getClient
 */
SDAPP.prototype.client = function(){
	return {
		"width":this.J(window).width(),
		"height":this.J(window).height()
	};
}

/**
 * resize
 */
SDAPP.prototype.renew = function(){
	var _this = this;
	_this.J(window).resize(function(event) {
		_this.client();
		window.console&&console.log(_this.client().width,_this.client().height);
	});
}

/**
 * plugin
 */
SDAPP.prototype.plugin = function(){
	var _this = this;
	// focus
	this.O['focus']&&this.J("[data-focus]").sudyfocus(this.O['focus']);

	// menu
	if(this.client().width > 999){
		/*增加*/
		this.J(".wp-navi .wp-menu li").each(function(){
			_this.J(this).children(".menu-switch-arrow").appendTo(_this.J(this).children(".menu-link"));
		});
		this.J(".wp-navi").find("li").on("mouseenter",function(){
			_this.J(this).addClass("hover");
			_this.J(this).children("a").addClass("parent");
			_this.J(this).children('.sub-menu').show();
		}).on("mouseleave",function(){
			_this.J(this).removeClass("hover");
			_this.J(this).children("a").removeClass("parent");
			_this.J(this).children('.sub-menu').hide();
		});
	}

	var $aside = this.J("#wp-navi-aside");
	var $asides = this.J("#wp-navi-asides");
	if(this.O['menu']){
		if(/slide/.test(this.O.menu['type'])){
			this.J(".wp-navi").addClass('wp-navi-slide');
			this.J(".navi-slide-head").on("click",function(){
				_this.J(this).siblings().slideToggle(150);
			});
			this.J(".wp-navi").find("li").find(".menu-switch-arrow").on("click",function(){
				_this.J(this).parent().children('.sub-menu').slideToggle(400)
						.parent().siblings(".menu-item,.sub-item").children('.sub-menu').slideUp(400);
			});
		}
		if(/aside/.test(this.O.menu['type'])){
			var $menus = [];
			this.J("[data-nav-aside]").clone().each(function(index, el){
				var opt = _this.J.parseJSON(_this.J(el).attr("data-nav-aside"));
				$menus[opt.index] = _this.J('<div class="navi-aside-head"><h3 class="navi-aside-title">'+opt.title+'</h3></div>').add(el);
			});;

			$.each($menus, function() {
				_this.J(this).appendTo(".navi-aside-wrap");
			});

			this.J(".navi-aside-toggle").addClass('navi-aside-toggle-show').on("click",function(){
				$aside.addClass('wp-navi-aside-active');
				_this.J("html").css({marginTop:0});
				_this.J("body").addClass('navi-aside-page').css({width:_this.client().width,height:_this.client().height})
						.stop().animate({marginLeft:216}, 250);
				_this.J(".aside-inner", $aside).addClass('aside-inner-show').stop().animate({left:0}, 250);
			});
			this.J(".navi-aside-toggles").addClass('navi-aside-toggle-show').on("click",function(){
				$asides.addClass('wp-navi-aside-active');
				_this.J("html").css({marginTop:0});
				_this.J(".main .body_b").css({width:_this.client().width,height:_this.client().height})
						.stop().animate({left:216}, 250);
				_this.J(".aside-inner", $asides).addClass('aside-inner-show').stop().animate({left:0}, 250);
			});
			this.J(".navi-aside-mask").on("click",function(event){
				event.preventDefault();
				_this.J("body").removeClass('navi-aside-page').stop().animate({marginLeft:0}, 250,function(){
					_this.J("body").removeAttr('style');
					$aside.removeClass('wp-navi-aside-active');
					$asides.removeClass('wp-navi-aside-active');
					_this.J("html").removeAttr('style');
				});
				_this.J(".aside-inner", $aside).removeClass('aside-inner-show').stop().animate({left:-216}, 250);
				_this.J(".main .body_b").css({width:_this.client().width,height:_this.client().height})
						.stop().animate({left:0}, 250);
				_this.J(".aside-inner", $asides).addClass('aside-inner-show').stop().animate({left:-216}, 250);
			});
			/*增加*/
			this.J(".menu-switch-arrow",".wp-navi-aside").each(function(){
				console.log(_this.J(this).parent("a"));
				_this.J(this).insertAfter(_this.J(this).parent("a"));
			});

			this.J(".menu-switch-arrow",".wp-navi-aside").prev().on("click",function(){
				_this.J(this).toggleClass('menu-open-arrow').siblings(".sub-menu").slideToggle(250);
			});
			this.J(".menu-switch-arrow",".wp-navi-aside").on("click",function(){
				_this.J(this).toggleClass('menu-open-arrow').siblings(".sub-menu").slideToggle(250);
			});
		}
	}

	this.J(".col_menu_head").on("click",function(event){
		event.preventDefault();
		_this.J(".col_menu_con").slideToggle(150);
	});

	if(this.J(".wp_column").length<1){
		this.J(".column-switch").hide();
		this.J(".col_menu_head").unbind("click");
	}

}