let weather = {
    'apiKey': '1d8340ae86449b0a9b338b4986ef2655',
    fetchWeather: function(cityName) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => this.displayWeather(data))
            .catch(err => alert('Enter a valid city name'))
    },

    displayWeather: function(data) {
        let { name } = data;
        let { temp } = data.main;
        let { description, icon } = data.weather[0];
        let { humidity } = data.main;
        let { speed } = data.wind;

        document.querySelector('.header').textContent = `Weather in ${name}`;
        document.querySelector('.degrees').innerHTML = `${temp.toFixed(0)} &#8451`;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector('.weather-type').textContent = description;
        document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
        document.querySelector('.wind-speed').textContent = `Wind speed: ${speed} km/h`
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}?landmark')`
    },

    searchWeather: function() {
        let cityName = document.querySelector('.city-input');
        this.fetchWeather(cityName.value);
        cityName.value = '';
    }
}


weather.fetchWeather('Sofia')


document.querySelector('.search-btn').addEventListener('click', function() {
    weather.searchWeather();
})

document.querySelector('.city-input').addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        weather.searchWeather();
    }
})