$(document).ready(function(){
    
    // header
    var winHeight = $(window).height();
    
    $(window).scroll(function () {
        var winTop = $(document).scrollTop() + 95;

        if(winTop > winHeight){
            $('header').slideDown(300);
        }else{
            $('header').slideUp(300);
        }
    }); 

    
    // gallery
    $('.gallery').swipebox();
});//op