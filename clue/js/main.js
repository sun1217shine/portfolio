$(document).ready(function(){
    
    //.popup && .topBtn--------------------------------------------------------------------------------
    
    $('.popup a span').on('click',function(){
        $('.popup').hide();
    });//.popup .click
    
    $('.topBtn').on('click',function(){
        $('html, body').animate({
            scrollTop : 0
        });
    }); //.topBtn.click
    
    
    //.headerB-------------------------------------------------------------------------------------
    $('.headerB .allMenu, .gnb, .gnbBox').on('mouseover',function(){
        $('.gnbBox').stop().slideDown();
    }).on('mouseout',function(){
        $('.gnbBox').stop().slideUp();
    });//.gnbBox .mouseover
                    
    $('.gnb li, .gnbBox .sub ul').on('mouseover',function(){
        var img = $(this).index();
        $('.gnbBox .imgBox li').eq(img).addClass('on');
    }).on('mouseout',function(){
        var img = $(this).index();
        $('.gnbBox .imgBox li').eq(img).removeClass('on');
    });//.mouseover

    
    //.mainBn-----------------------------------------------------------------------------------
    $('.mainSlider').slick({
        nextArrow : '.mainBn .next',
        prevArrow : '.mainBn .prev',
        dots : true,
        appendDots : '.mainBn .pager',
        infinite : true,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 2500
    });
    
    //section2.best---------------------------------------------------------------------------
    $('.bestImg').slick({
        prevArrow : '.bestIn .btn .prev',
        nextArrow : '.bestIn .btn .next',
        slidesToShow: 4,
        slidesToScroll: 1,
    }); //.bestImg.bxSlider
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});//opening