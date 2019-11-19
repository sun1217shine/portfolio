$(document).ready(function(){

    scrolly();


    

    //mainBn------------------------------------------------------------------------------------------
    $('.mainSlider').slick({
        dots: true,
        infinite: true,
        autoplay : true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        prevArrow : '.mainBn .prev',
        nextArrow : '.mainBn .next',
        appendDots : '.mainBn .pager'
      });
    


    //section2.gall---------------------------------------------------------------------------------

    $('.con').slick({
        slidesToShow : 4,
        prevArrow : '.gall .btn .prev',
        nextArrow : '.gall .btn .next',
        infinite : true,
        autoplay : true,
        autoplaySpeed : 2000
    });

    
    //section6.info---------------------------------------------------------------------------------
    $('.info .menu .mTit div').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        var divIndex = $(this).index();
        $(this).parents('.menu').find('.list>li').eq(divIndex).addClass('on').siblings().removeClass('on');
    });//.info.menu.mTit div .click
    


    $('#topBtn').on('click',function(){
        $('html, body').animate({
            scrollTop : 0
        });
    });//top버튼 클릭했을 때
    
        
});//opening