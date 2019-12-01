$(document).ready(function(){


var widthFunc = function(){
    $('.profile .skill li').eq(0).find('div>div').stop().delay(500).animate({width : '70%'},1000);
    $('.profile .skill li').eq(1).find('div>div').stop().delay(500).animate({width : '75%'},1000);
    $('.profile .skill li').eq(2).find('div>div').stop().delay(500).animate({width : '90%'},1000);
    $('.profile .skill li').eq(3).find('div>div').stop().delay(500).animate({width : '65%'},1000);
    $('.profile .skill li').eq(4).find('div>div').stop().delay(500).animate({width : '80%'},1000);
};//스킬 늘리기

$('.menu').on('click',function(){
    $('.profileCon').stop().animate({left:''},1000);
    widthFunc();
});

$('.profile .close').on('click',function(){
    $('.profileCon').stop().animate({left:'150%'},1000);
    $('.profile .skill li').find('div>div').stop().animate({width : ''},1000);
});


});//op