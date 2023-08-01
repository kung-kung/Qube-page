$(function(){
    $(".girl").animate({left:"-120px"},1000)
    $(".man").animate({right:0},1000)
    $(".line").delay(200).animate({top:"200px"},1000)
    $(".tx1").delay(500).animate({opacity:1},1000,function(){
        $(".tx1").delay(5000).addClass("red")
    })
    $(".tx2").delay(1000).animate({opacity:1},1000,function(){
    })
    $(".kill").delay(3000).animate({left:"60px"},300)
    $(".main>li, .bg").hover(function(){
        $(".sub, .bg").stop().slideDown()
    },function(){
        $(".sub, .bg").stop().slideUp()
    })
    $(".no_left ul").slick({
        autoplay:true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        pauseOnHover: true,
        infinite: true
        
    })
    $(".m").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        infinite: true
    })

    $(".stop").click(function(){
        if($(this).hasClass("play")==1){
            $(this).removeClass("play")
            $(".m").slick("slickPlay")
        }else{
            $(this).addClass("play")
            $(".m").slick("slickPause")
        }
    })

    $(".de").hover(function(){
        $(this).removeClass("ggaa")
        $(this).stop().animate({opacity:1},100)
    },function(){
        $(this).addClass("ggaa")
        $(this).stop().animate({opacity:0},100)
        
    })
})