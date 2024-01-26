// const apiKey = "1bea87842b0521467b0e3b413bea40c2";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   if (response.status == 404) {
//     document.querySelector(".error").style.display = "black";
//     document.querySelector(".weather").style.display = "none";
//   } else {
//     var data = await response.json();
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML =
//       Math.round(data.main.temp) + "°c";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//     if (data.weather[0].main == "Clouds") {
//       weatherIcon.src = "images/clouds.png";
//     } else if (data.weather[0].main == "Clear") {
//       weatherIcon.src = "images/clear.png";
//     } else if (data.weather[0].main == "Rain") {
//       weatherIcon.src = "images/rain.png";
//     } else if (data.weather[0].main == "Drizzle") {
//       weatherIcon.src = "images/drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//       weatherIcon.src = "images/mist.png";
//     } else if (data.weather[0].main == "Snow") {
//       weatherIcon.src = "images/snow.png";
//     }
//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";
//   }
// }
// searchBtn.addEventListener("click", function () {
//   checkWeather(searchBox.value);
// });

const apiKey = "1bea87842b0521467b0e3b413bea40c2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Select error and weather elements
const errorElement = document.querySelector(".error");
const weatherElement = document.querySelector(".weather");

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    handleError();
  }
}

function displayWeatherData(data) {
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").textContent = data.main.humidity + "%";
  document.querySelector(".wind").textContent = data.wind.speed + "km/h";

  // Set weather icon based on weather condition
  setWeatherIcon(data.weather[0].main);

  // Show weather, hide error
  weatherElement.style.display = "block";
  errorElement.style.display = "none";
}

function setWeatherIcon(weatherCondition) {
  switch (weatherCondition) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
    default:
      weatherIcon.src = "images/unknown.png";
      break;
  }
}

function handleError() {
  // Hide weather, show error
  weatherElement.style.display = "none";
  errorElement.style.display = "block";
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
