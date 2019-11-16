var li = document.querySelectorAll('.season li'),
    wrap = document.querySelector('#wrap');

//선택자////////////////////////////////////////////////////////////////////////////////


var liClick = function(e){
    for(i=0; i<li.length; i++){
        li[i].classList.remove('on');
    };//for
    
    var thisLi = e.currentTarget;
    thisLi.classList.add('on');

    var liTxt = thisLi.innerText;
    wrap.classList = liTxt;
};//func.liClik


for(i=0; i<li.length; i++){
    li[i].addEventListener('click',liClick);
};







