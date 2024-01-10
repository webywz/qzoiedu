$(function(){
    $(".scroll ul li").each(function(){
        $(this).click(function(){
            $(".scroll ul li").removeClass("selected");
            $(this).addClass("selected");
        })
    });
    $(function(){
        $(".head").addClass("showdiv");
        setTimeout(function(){
            $(".head").addClass("s");
        },500);
    });


    $(".bb").click(function(){
        $(".body_b").addClass("showdiv");//.focus();
        $(".header").addClass("mobile");
        //first=1;
        setTimeout(function(){
            $(".head").removeClass("showdiv");//.addClass("leave");
            $(".main1").addClass("showdiv");
        },500);
    })
    $(".head").mousewheel(function(event, delta, deltaX, deltaY){
        if(delta<0){
            $(".bb").click();
        }
        console.log("1");
    });
    function showlayer(e,fun,type){
        if(!fun){fun=function(){};}
        if($(e).find(".sbar").length>0){
            $(e).find(".sbar").mCustomScrollbar();
        }
        $(e).addClass("showdiv");
        fun();
    }
    function hidelayer(e,fun,type){
        if(!fun){fun=function(){};}
        $(e).removeClass("showdiv");
        if(typeof(player)!="undefined"){player.pause();}
        fun();
        if($(e).find(".playing").length>0){
            var v=$(e).find(".playing")[0];
            v.pause();
            $(e).find(".playing").removeClass("playing");
        }
    }


    $(window).scroll(function(){
        if($(window).width()<=850){
            if($(window).scrollTop()<50){
                $(".header").removeClass("mobile")
            }
            else{
                $(".header").addClass("mobile")
            }
        }

    });


    $(".body_b").scroll(function(){
        $(".main1,.main2,.main3,.main4,.main5,.main6,.main7").each(function(index, element) {
            var e=$(this);
            var fix=parseInt(e.attr("fix"));
            if(!fix && fix!=0){fix=$(window).height()*6*0.1;}
            else{fix=$(window).height()*fix*0.1;}
            //var h=$(window).height()-$(e).height()>0?$(window).height()-$(e).height():0;
            if($(window).scrollTop()>=$(e).offset().top-fix){
                if(!$(e).hasClass("showdiv")){
                    $(e).addClass("showdiv");

                }
            }
            else{
                if($(e).hasClass("showdiv")){
                    $(e).removeClass("showdiv");
                    if($(e).hasClass("part1")){
                        $(".home9 .part1").removeClass("s");
                    }
                }
            }
            var top = $(".body_b").scrollTop();
            if(top < 1000){
                $(".scrollto").removeClass("selected");
                $(".scrollto0").addClass("selected");
            }
            else if(top < 1750){
                $(".scrollto").removeClass("selected");
                $(".scrollto1").addClass("selected");
            }
            else if(top < 2345){
                $(".scrollto").removeClass("selected");
                $(".scrollto2").addClass("selected");
            }
            else if(top < 3045){
                $(".scrollto").removeClass("selected");
                $(".scrollto3").addClass("selected");
            }
            else if(top < 3745){
                $(".scrollto").removeClass("selected");
                $(".scrollto4").addClass("selected");
            }
            else if(top < 4500){
                $(".scrollto").removeClass("selected");
                $(".scrollto5").addClass("selected");
            }
            else {
                $(".scrollto").removeClass("selected");
                $(".scrollto6").addClass("selected");
            }
        });
    });

});