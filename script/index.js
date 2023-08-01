$(function(){
    var x= -10
    setInterval(function(){
        if(x>=0 && x<=100){
            $(".bar p").text( x + "%")
            x++
        }
        x++
    },90)
    $(".bb").css("left","100%")


})