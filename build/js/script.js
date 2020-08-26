'use strict'

fetch('http://api.openweathermap.org/data/2.5/group?id=524901,703448,498817&units=metric&appid=eaa9becf88b7e7f447444838b2264952')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
          let weatherCity = document.querySelector('.weather__city');
          let weatherDegree = document.querySelector('.weather__degree');
          let weatherDisclaimer = document.querySelector('.weather__disclaimer');
          let weatherIcon = document.querySelector('.weather__icon');

          weatherCity.addEventListener('change', function() {
                for (let key in data) {
                    for (let i = 0; i < data[key].length; i++) {
                        if (weatherCity.value == data[key][i].id) {
                            weatherDegree.innerHTML = Math.round(data[key][i].main.temp) + '&deg;';
                            weatherDisclaimer.textContent = data[key][i].weather[0]['description'];
                            weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data[key][i].weather[0]['icon']}@2x.png">`;
                        } else if (weatherCity.value == '') {
                            weatherDegree.innerHTML = '';
                            weatherDisclaimer.textContent = '';
                            weatherIcon.innerHTML = '';
                        }
                    }
                }
          })
    })
    .catch(function () {
        // catch any errors
    });
