    
window.onload = function(){

    var nForm = document.querySelector('.nameForm'),
    nInput = nForm.querySelector('input'),
    greeting = document.querySelector('.greeting');
    
    var USER_LS = 'currentUser', 
    SHOW = 'show';
    //선택자/////////////////////////////////////////////////////////////////////////////////////


    var saveName = function(text){
        localStorage.setItem(USER_LS,text);
    };//func.saveName

                        
    var printName = function(text){
        nForm.classList.remove(SHOW);
        greeting.classList.add(SHOW);
        greeting.innerText = 'HELLO'+text;
    };//func.printName


    var nameSubmit = function(e){
        e.preventDefault();
        var currentValue = nInput.value;

        saveName(currentValue);
        printName(currentValue);
    };//func.nameSubmit


    var askForName = function(){
        nForm.classList.add(SHOW);
        nForm.addEventListener('submit',nameSubmit);
    };//func.askForName
    

    var loadName = function(){
        var currentUser = localStorage.getItem(USER_LS);

        if(currentUser === null){
            askForName();
        }else{
           printName(currentUser);
        };//if
    };//func.loadName
    loadName();
    
};//opening
