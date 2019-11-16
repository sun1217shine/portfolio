var today = new Date();

//선택자//////////////////////////////////////////////////////////////////////////////////////////


var nowTime = function(){
    var today = new Date();

    var nowHr = today.getHours(),
    nowMin = today.getMinutes(),
    nowSec = today.getSeconds(),
    timeHr = document.querySelector('#hr'),
    timeMin = document.querySelector('#min'),
    timeSec = document.querySelector('#sec');

    nowHr<10 ? timeHr.innerText = '0'+nowHr : timeHr.innerText = nowHr;
    nowMin<10 ? timeMin.innerText = '0'+nowMin : timeMin.innerText = nowMin;
    nowSec<10 ? timeSec.innerText = '0'+nowSec : timeSec.innerText = nowSec;
};//func.nowTime

nowTime();

setInterval(nowTime,500);

var liOn = function(){
    var li = document.querySelectorAll('.season li');
    for(i=0; i<li.length; i++){
        li[i].classList.remove('on');
    };
};//func.liOn


var timmer = function(){
    var time = new Date(), 
        thHr = time.getHours();
    var wrap = document.querySelector('#wrap'),
        li = document.querySelectorAll('.season li');
    if(thHr>=6 && thHr<=11){
        wrap.classList = 'morning';
        liOn();
        li[0].classList.add('on');
    }else if(thHr>=12 && thHr<=17){
        wrap.classList = 'afternoon';
        liOn();
        li[1].classList.add('on');
    }else if(thHr>=18 && thHr<=23){
        wrap.classList = 'evening';
        liOn();
        li[2].classList.add('on');
    }else{
        wrap.classList = 'night';
        liOn();
        li[3].classList.add('on');
    }
};//func.timmer

timmer();











