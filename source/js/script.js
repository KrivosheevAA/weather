'use strict'

fetch('http://api.openweathermap.org/data/2.5/group?id=524901,703448,498817&units=metric&appid=eaa9becf88b7e7f447444838b2264952')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
          let weatherCity = document.querySelector('.weather__city');
          let weatherDegree = document.querySelector('.weather__degree')
          weatherCity.addEventListener('change', (e) => {
            for (let key in list) {
              console.log(list);
            }

          })
          weatherDegree.innerHTML = Math.round(data.main.temp - 273) + '&deg;';

        // document.querySelector('.weather__city').value.textContent = data.name;
        // document.querySelector('.weather__degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        // document.querySelector('.weather__disclaimer').textContent = data.weather[0]['description'];
        // document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });

