$(document).ready(function(){

    /* 전체 설정------------------------------------------ */
    var wHeight = $(window).height() - 40;
    $('section, footer').height(wHeight);

    $(window).on('resize',function(){
        var wHeight = $(window).height() - 40;
         $('section, footer').height(wHeight);
    });//리사이즈

    
    $(window).on('scroll',function(){
        var scr = $(window).scrollTop();
        for(i=0; i<6; i++){
            if(scr>=wHeight*i && scr<wHeight*(i+1)){
                $('ul li').eq(i).addClass('on').siblings().removeClass('on')
            };
        };//for
    });//스크롤할 때  메뉴 바뀌게 하기


    $('section, footer').on('mousewheel',function(e,d){

        if(d<0 && $('#wrap').hasClass('move')){

            var nxtTop = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop : nxtTop
            });
        
        }else if(d>0 && $('#wrap').hasClass('move')){
            var prvTop = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop : prvTop
            });
        };//if
    });//mousewheel 제어(풀페이지 설정)



    /* #popup------------------------------------------- */
   $('#popup .close').click(function(){
        $('#popup').hide()
    }); 


    /* #menu---------------------------------------------- */
    $('#menu li').on('click',function(){
        var liIndex = $(this).index();
        var secOfs = $('section').eq(liIndex).offset().top;
        
        $('html, body').animate({
            'scrollTop' : secOfs
        });
    });//메뉴 클릭


    /* .mainBn------------------------------------------------- */
    $('header .person .sub').hide();

    $('header .person>li').on('click',function(){
        $('header .person .sub').stop().slideToggle();
        $(this).parent().toggleClass('on');
    });//사람 슬라이드
    $('header .person .sub li').on('click',function(){
        var subliHtml = $(this).html(),
            liHtml = $('header .person>li').html();
        $(this).html(liHtml);
        $('header .person>li').html(subliHtml);
        $(this).parent().stop().slideUp();
    });


    $('.utill .lang .uSub').hide();
    $('.utill .lang p').on('click',function(){
        $('.utill .uSub').stop().slideToggle();
        $(this).parent().stop().toggleClass('on');
    });//언어 슬라이드

    $('.utill .lang .uSub').on('click',function(){
        var subTxt = $(this).children().text(),
            nextTxt = $('.utill .lang p').text();
        $(this).children().text(nextTxt);
        $('.utill .lang p').text(subTxt);
        $(this).stop().slideUp();
        $(this).parent().removeClass('on');
    });//언어 변경


    var vid = $(this).find('video').get(0);
        vid.currentTime = 0;
        vid.play();//메인 비디오 제어


    $('.mainBn ul.type li').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
    });//메인 왕복/편도/다구간


    $('.choice label').on('click',function(){
        var labelIndex = $(this).index();
        $('.locationSub').eq(labelIndex).show();
    });//출발지, 도착지 선택시 서브 항목 띄우기


    $('.locationSub li').on('click',function(){
        $(this).parents('.locationSub').hide();
        var locationIndex = $(this).parents('.locationSub').index();
        var liTxt = $(this).text();
        $('.choice label').eq(locationIndex).children().val(liTxt);

    });//출발지, 도착지 클릭


    /* .food---------------------------------------------------- */

    $('.food ul').slick({
        slidesToShow : 3,
        slidesToScroll : 1,
        prevArrow : '.food .pager .prev',
        nextArrow : '.food .pager .next'
    });//.food 슬라이드 


    $('.food .pager button').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
    });//.food 슬라이드 버튼


    /* .pass---------------------------------------------------- */

    $('.pass .tabMenu li').on('click',function(){
        var liIndex = $(this).index();
        $('.pass .subTab>ul').eq(liIndex).addClass('on').siblings().removeClass('on');

        $(this).addClass('on').siblings().removeClass('on');


    });//.pass 탭메뉴 클릭


    $('.pass .subTab>ul>li a').on('click',function(e){
        e.preventDefault();

        $(this).next().css({
            display : 'block'
        });

        $('#wrap').removeClass('move');

    });//.pass 서브탭 클릭  

    


    $('.pass .tabSpace .close').on('click',function(){
        $(this).parents('.tabSpace').css({
            display : 'none'
        });

        $('#wrap').addClass('move');
    });//.pass 서브탭 close 버튼 클릭


    /* .gallery---------------------------------------------------- */

    $('.gallery .gallIn>div>div').on('click',function(e){
        $('.gallery .view').show();
        var img = $(this).html();
        $('figure').html(img);
        $('#wrap').removeClass('move');
    });//갤러리 이미지 클릭

    $('.gallery .view').prepend('<div class="gWrap"></div>');
    
    $('.close, .gWrap').on('click',function(e){
        e.preventDefault();
        $('.gallery .view').hide();
        $('#wrap').addClass('move');
    });//.gallery 클로즈 버튼 or 바깥 영역 클릭

    $('.gWrap').on('mouseover',function(){
        $(this).parent().addClass('on');
    }).on('mouseout',function(){
        $(this).parent().removeClass('on');
    });//.gWrap에 마우스오버




    setInterval(function(){
        var liHeight = $('.notice ul li').height();

        $('.notice ul').animate({
            top : -(liHeight)
        },1000,function(){
            $('.notice ul li').first().appendTo('.notice ul');
            $('.notice ul').css({top : 0});
        });
    },3000);//공지 슬라이드



    


});//opening