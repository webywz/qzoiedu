var miso_hd1 = new Swiper(".miso_hd1", {
	speed: 1E3,
	loop: !0,
	spaceBetween: 10,
	watchSlidesVisibility: !0,
	watchSlidesProgress: !0,
	noSwiping: !0,
	observer:true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	observeParents:true,
	noSwipingClass: "no-swi"
});

if($(window).width() > 1630){
	var miso_bd1 = new Swiper(".miso_bd1", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd1
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .02 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 4.65 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		},
	});
}

if($(window).width() <= 1630){
	var miso_bd1 = new Swiper(".miso_bd1", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd1
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .01 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 3.7 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		}
	});
}

var miso_hd2 = new Swiper(".miso_hd2", {
	speed: 1E3,
	loop: !0,
	spaceBetween: 10,
	watchSlidesVisibility: !0,
	watchSlidesProgress: !0,
	noSwiping: !0,
	observer:true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	observeParents:true,
	noSwipingClass: "no-swi"
});

if($(window).width() > 1630){
	var miso_bd2 = new Swiper(".miso_bd2", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd2
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .02 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 4.65 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		}
	});
}

if($(window).width() <= 1630){
	var miso_bd2 = new Swiper(".miso_bd2", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd2
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .01 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 3.7 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		}
	});
}

var miso_hd3 = new Swiper(".miso_hd3", {
	speed: 1E3,
	loop: !0,
	spaceBetween: 10,
	watchSlidesVisibility: !0,
	watchSlidesProgress: !0,
	noSwiping: !0,
	observer:true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	observeParents:true,
	noSwipingClass: "no-swi"
});

if($(window).width() > 1630){
	var miso_bd3 = new Swiper(".miso_bd3", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd3
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .02 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 4.65 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		}
	});
}

if($(window).width() <= 1630){
	var miso_bd3 = new Swiper(".miso_bd3", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd3
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .01 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 3.7 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		}
	});
}


var miso_hd4 = new Swiper(".miso_hd4", {
	speed: 1E3,
	loop: !0,
	spaceBetween: 10,
	watchSlidesVisibility: !0,
	watchSlidesProgress: !0,
	noSwiping: !0,
	observer:true,
	observeParents:true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	noSwipingClass: "no-swi"
});

if($(window).width() > 1630){
	var miso_bd4 = new Swiper(".miso_bd4", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd4
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .02 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 4.65 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		}
	});
}

if($(window).width() <= 1630){
	var miso_bd4 = new Swiper(".miso_bd4", {
		slidesPerView: "auto",
		slideToClickedSlide: !0,
		watchSlidesProgress: !0,
		loop: !0,
		speed: 1E3,
		/*navigation: {
			prevEl: ".homec .prev",
			nextEl: ".homec .next"
		},*/
		autoplay: {
			delay: 4000,
			stopOnLastSlide: !1,
			disableOnInteraction: !1
		},
		thumbs: {
			swiper: miso_hd4
		},
		observer:true,
		observeParents:true,
		on: {
			progress: function(c) {
				for (c = 0; c < this.slides.length; c++) {
					var e = this.slides.eq(c),
						g = this.slides[c].progress;
					modify = 1;
					1 < Math.abs(g) && (modify = .01 * (Math.abs(g) - 1) + 1);
					translate = g * modify * 3.7 + "rem";
					scale = 1 - Math.abs(g) / 6;
					zIndex = 9 - Math.abs(Math.round(10 * g));
					e.transform("translateX(" + translate + ") scale(" + scale + ")");
					e.css("opacity", 1);
					e.find(".img .img_hezi").css("opacity", (1-Math.abs(g)/6));
					e.css({
						zIndex: zIndex
					});
					5 < Math.round(Math.abs(g)) && e.css("opacity", 0)
				}
			},
			setTransition: function(c) {
				for (var e = 0; e < this.slides.length; e++) this.slides.eq(e).transition(c)
			}
		}
	});
}