$(document).ready(function(){


    /* header------------------------------------------------ */
    $('header .gnb>li').on('mouseover',function(){
        var pOfs = $(this).children('p').offset().left,
            pWidth = $(this).children('p').width();

        $('.bar').stop().animate({
            width : pWidth,
            left : pOfs,
            opacity : 1
        });//메뉴바 이동

        $(this).children('.sub').stop().slideDown().parent().siblings().children('.sub').stop().slideUp();//슬라이드

    }).on('mouseout',function(){
        $(this).children('.sub').stop().slideUp();//슬라이드
        $('.bar').stop().animate({opacity:0});//메뉴바 숨김
    });//gnb영역의 li에 마우스효과


     /* #top---------------------------------------------- */
     $('#topBtn').on('click',function(){
        $('html, body').animate({
            scrollTop : 0
        });
    })
    


    /* breakpoint 768---------------------------------- */
    var winWidth = $(window).width();//윈도우 넓이

    if(winWidth < 768){

        $('header>button').on('click',function(){
            $('.gnb').stop().animate({
                left : 0
            });
        });//햄버거 버튼 클릭
        $('header .gnb>li').off('mouseover').off('mouseout');

        $('header .gnb>li>p').on('click',function(){
            $(this).next('.sub').stop().slideToggle().parent().siblings().children('.sub').stop().slideUp();
        });//gnb li 클릭 했을 때 slideToggle

        $('header .gnb .close').on('click',function(){
            $(this).parent().stop().animate({
                left : '-100%'
            });
        });//gnb의 클로즈 버튼 클릭

    };//if


    /* 리자이즈------------------------------------------- */
    $(window).on('resize',function(){

        winWidth = $(window).width();//윈도우 넓이

        if(winWidth > 768 && winWidth < 1200){
            //768 ~ 1200
            $('header .gnb>li').on('mouseover',function(){
                var pOfs = $(this).children('p').offset().left,
                    pWidth = $(this).children('p').width();
        
                $('.bar').stop().animate({
                    left : pOfs,
                    width : pWidth,
                    opacity:1
                });//메뉴바 이동
        
                $(this).children('.sub').stop().slideDown().parent().siblings().children('.sub').stop().slideUp();//슬라이드
        
            }).on('mouseout',function(){
                $(this).children('.sub').stop().slideUp();//슬라이드
            });//gnb영역의 li에 마우스효과


        }else if(winWidth <= 768){
            //~768
            $('header>button').on('click',function(){
                $('.gnb').stop().animate({
                    left : 0
                });
            });//햄버거 버튼 클릭
            $('header .gnb>li').off('mouseover').off('mouseout');
    
            $('header .gnb>li>p').on('click',function(){
                $(this).next('.sub').stop().slideToggle().parent().siblings().children('.sub').stop().slideUp();
            });//gnb li 클릭 했을 때 slideToggle
    
            $('header .gnb .close').on('click',function(){
                $(this).parent().stop().animate({
                    left : '-100%'
                });
            });//gnb의 클로즈 버튼 클릭
            
    
        }else{
            //1200~
            $('header .gnb>li').on('mouseover',function(){
                pOfs = $(this).children('p').offset().left,
                pWidth = $(this).children('p').width();
        
                $('.bar').stop().animate({
                    left : pOfs,
                    width : pWidth
                });//메뉴바 이동
        
                $(this).children('.sub').stop().slideDown().parent().siblings().children('.sub').stop().slideUp();//슬라이드
        
            }).on('mouseout',function(){
                $(this).children('.sub').stop().slideUp();//슬라이드
                $('.bar').stop().animate({width : 0});//메뉴바 숨김
            });//gnb영역의 li에 마우스효과
        }
    });//리사이즈





});//op