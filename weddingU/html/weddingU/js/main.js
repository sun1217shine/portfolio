$(document).ready(function(){


    /* .plan--------------------------------------------------- */
    
    $('.plan .img').slick({
        asNavFor : '.plan .txt',
        dots : true,
        arrows : false
    });
    
    $('.plan .txt').slick({
        asNavFor : '.plan .img',
        arrows : false,
        autoplay : true
    });

    $(window).on('scroll',function(){

        var scrTop = $('html, body').scrollTop();
        var planOff = $('.plan').offset().top - 300;
    
        if(scrTop >= planOff){
            $('.plan .txtBox .txtIn').animate({
                opacity : 1
            },900)
        }//if

    });


    /* .planer---------------------------------------- */
    var txtHeight = $('.planer article').eq(0).find('.txt').height();
    $('.planer article').eq(1).find('.txt').height(txtHeight);

    
    /* breakpoint 768---------------------------------- */
    var winWidth = $(window).width();//윈도우 넓이

    if(winWidth < 768){

        $('.plan .txtBox .txtIn').css({opacity : 1});
    };//if


    /* 리자이즈------------------------------------------- */
    $(window).on('resize',function(){

        winWidth = $(window).width();//윈도우 넓이

        if(winWidth > 768 && winWidth < 1200){
            //768 ~ 1200
            txtHeight = $('.planer article').eq(0).find('.txt').height();
            $('.planer article').eq(1).find('.txt').height(txtHeight);

        }else if(winWidth <= 768){
            //~768
    
            $('.plan .txtBox .txtIn').css({opacity : 1});

            txtHeight = $('.planer article').eq(0).find('.txt').height();
            $('.planer article').eq(1).find('.txt').height(txtHeight);
           
        }else{
            //1200~
        }
    });//리사이즈
        

});//op