'use strict'

fetch('http://api.openweathermap.org/data/2.5/weather?id=536203&appid=eaa9becf88b7e7f447444838b2264952')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.weather__city').textContent = data.name;
        document.querySelector('.weather__degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weather__disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
