$(document).ready(function(){
                
    
    var img = ['img_01','img_02','img_03','img_04','img_05','img_06','img_07','img_08','img_09'];
    
    for(i=0; i<img.length; i++){
        var src = '<img src="img/'+img[i]+'.png">';
        $('.rowIn').append('<div class="box">'+src+'</div>');
    }; //for
    
    $('.box').on('click',function(){
        $('.view').show();
        var img = $(this).html();                    
        $('figure').html(img);
        var boxN = $(this).index();

        $('.view figure').css({
                top : '',
                transform : 'translateX(-50%)'
            });
            $('.view figure img').css({
                width : '100%',
                height : 'auto'
            });
            
    }); //.box.click

    
    $('.view').prepend('<div class="wrap"></div>'); 
    
    $('.close, .wrap').on('click',function(){
        $('.view').hide();
    }); //.close.click
    
    
});//opening 
