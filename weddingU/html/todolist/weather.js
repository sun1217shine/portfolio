var WEA_LS = 'weather',
    weatherTxt = document.querySelector('.weather');
var API_KEY = 'e0d302ea69a4c1b1d2a8200ec11cc6e2';

/////////////선택자/////////////////////////////////////////////////////////////////////////////////////


var getWeather = function(lat,lng){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid='+API_KEY+'&units=metri')
        .then(function(response){
            return response.json();
            })
        .then(function(json){
            var currentTemp = json.main.temp,
                currentLocal = json.name; 
            weatherTxt.innerText = currentLocal+','+ currentTemp
        });//then
};//func.getWeather


var saveWeather = function(weatherObj){
    localStorage.setItem(WEA_LS,JSON.stringify(weatherObj)); 
};//func.saveWeather


var success = function(position){
    var latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    
    var weatherObj = {
        latitude, 
        longitude 
    };

    saveWeather(weatherObj);
};//func.success 


var fail = function(){
    weatherTxt.innerText = 'fail load';
};//func.fail


var askForWeather = function(){
    navigator.geolocation.getCurrentPosition(success,fail);
};//func.askForWeather


var loadWeather = function(){
    var load_weather = localStorage.getItem(WEA_LS);

    if(load_weather === null){ 
        askForWeather();

    }else{ 
        var parseWeather = JSON.parse(load_weather);
        getWeather(parseWeather.latitude,parseWeather.longitude);
    };//if
    
};//func.loadWeather

loadWeather();