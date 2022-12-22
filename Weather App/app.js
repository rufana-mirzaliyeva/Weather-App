const cityName = document.querySelector(".city");
const icon = document.querySelector(".icon");
const tepmDescription = document.querySelector (".description");
const temperatur = document.querySelector(".temp");
const humidityPerscentage = document.querySelector (".humidity");
const windSpeed = document.querySelector (".wind");
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search button");
          
let weather = {
    "apiKey": "4222b13a3ebe3ea5d7dee728440f8e88",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + 
            city + 
            "&units=metric&appid="+ 
            this.apiKey
             )
             .then((response) => response.json()).then((data) => this.displayWeather(data));
        },
        displayWeather: function(data){
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed }= data.wind;
           
            cityName.innerText= "Weather in " + name;
            icon.src = "https://openweathermap.org/img/wn/" + icon + ".png" ;
            tepmDescription.innerText = description;
            temperatur.innerText = Math.floor(temp) + "°C";
            humidityPerscentage.innerText = "Humidity: " + humidity + "%";
            windSpeed.innerText = "Wind speed: " + Math.floor(speed) + "km/h";
            document.body.style.backgroundImage =
              "url('https://source.unsplash.com/1600x900/?" + name + "')";
            },
            
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

searchBtn.addEventListener("click", function () {
  weather.search();
  searchBar.value ="";
  
});

searchBar.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
      searchBar.value = "";
    }
  });

  weather.fetchWeather("Baku");
