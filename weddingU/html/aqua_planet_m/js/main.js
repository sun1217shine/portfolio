$(document).ready(function(){



    /* header-------------------------------------------------- */
    $('header .menu').on('click',function(){
        $(this).addClass('on');

        $('.subMenu').stop().animate({
            left : 0
        },1000);
    });//햄버거버튼 클릭


    $('.subMenu .sub').hide();//서브메뉴 숨기기


    var liOff = [];
    $('.subMenu p').each(function(){
        var a = $(this).offset().top;
        liOff.push(a);
    });//서브메뉴 p태그의 높이 구하기


    $('header .subMenu p').on('click',function(e){
        e.preventDefault();


        $(this).parent().stop().toggleClass('on').siblings().removeClass('on');//상위 li에 클래스 add

        $(this).parent().stop().animate({
            opacity : 1
        }).siblings().stop().animate({
            opacity : 0.3
        });//나머지 메뉴 opacity 조절


        $(this).next().stop().slideToggle().parent().siblings().find('.sub').stop().slideUp();//slide
        

        //라인 움직임 조절
        var i = $(this).parent().index();
        var pHeight = $(this).height();

        $('.line').css({
            top : liOff[i]+pHeight - 5,
            width : $(this).children('a').width(),
            opacity : 1
        });
    
    });//서브메뉴 클릭


    $('header .subMenu .close').on('click',function(){
        $(this).parent().stop().animate({
            left : '-110%'
        });
        $('.menu').removeClass('on');
    });//서브메뉴 close버튼 클릭


    /* .program------------------------------------------ */
    
    $('.pSlider').slick({
        centerMode:true,
        arrows : false,
        centerPadding : '30px'
    });//프로그램 슬라이드


    /* .hall---------------------------------------------- */
    $('.hall ul').slick({
        arrows : false,
        vertical : true,
        verticalSwiping : true,
        autoplay : true,
        autoplaySpeed : 1500,
        centerMode : true,
        centerPadding : '22px',
    });//전시회 슬라이드


    /* .rescue---------------------------------------------- */
    let pHeight = $('.rescue .sub p').height();
    pHeight = pHeight + 30;
    $('.rescue .sub').height(pHeight);


    $('.rescueIn li').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        //li 이미지 오퍼시티 조절
        let liIndex = $(this).index();
        $('.rescue .sub li').eq(liIndex).addClass('on').siblings().removeClass('on');
        //li .sub 내용 변경


        let pHeight = $('.rescue .sub p').eq(liIndex).height();
            pHeight = pHeight + 30;
        $('.rescue .sub').height(pHeight);

        $(window).resize(function(){
            pHeight = $('.rescue .sub p').eq(liIndex).height();
            pHeight = pHeight + 30;
        $('.rescue .sub').height(pHeight);
        });
        //li .sub의 높이
    
    });//구조 li 클릭했을 때


    //#top-----------------------------------------------
    $('#top').click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        });
    });//top버튼 클릭


    $(window).on('scroll',function(){

        var scr = $(this).scrollTop(),
            ht = $(this).height(),
            rescueOfs = $('.rescue').offset().top,
            rescueHeight = $('.rescue').height();
            scr += ht;
            rescueOfs += rescueHeight;
            
            var footerHeight = $('footer').height();

        if(scr >= rescueOfs){
            $('#top').css({
                bottom : footerHeight + 50
            });
        }else{
            $('#top').css({
                position : 'fixed',
                bottom : '10px'
            })
        }
    });//#top이 footer 영역 위에서 멈추게 하고 다른 영역에서는 움직이게 하기




    
});//opening