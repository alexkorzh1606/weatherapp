let input = document.querySelector('.input');
let button = document.querySelector('.input_button');
let city = document.querySelector('.city');
let weather = document.querySelector('.weather');
let temp= document.querySelector('.temp');
let pressure = document.querySelector('.pressure');
let humidity = document.querySelector('.humidity');
let wind_speed = document.querySelector('.wind_speed');

button.onclick = function() {
    let search_city = input.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search_city}&appid=5cde2ad96d8dafad5f344f91064c39f8`)
        .then((response) => response.json())
        .then((json) => GenerateDom(json))
    
    function GenerateDom(data) {
        city.textContent = `Searched sity: ${data.name}`;
        weather.textContent = `The weather discription: ${data.weather[0].main}`;
        temp.textContent = `The temperature is ${data.main.temp} F`;
        pressure.textContent = `The pressure is ${data.main.pressure} mm`;
        humidity.textContent = `The humidity is ${data.main.humidity} %`;
        wind_speed.textContent = `The wind speed is ${data.wind.speed} m/s`;
    };
};