$(document).ready(function(){

 
 //gnb------------------------------------------------------------------------------------------
 $('.gnb>li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown();
}).on('mouseout',function(){
    $(this).find('.sub').stop().slideUp();
});


//utill------------------------------------------------------------------------------------------
$('.utill>li').on('click',function(){
    var utillIndex = $(this).index();
    console.log(utillIndex);
    $('.utillSub').css({display : 'block'});
});
$('.utillSub .close').on('click',function(){
    $('.utillSub').css({display : 'none'});
});


//nav--------------------------------------------------------------------------------------------
$('nav ul li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');

});


});//op