let now = new Date();
let timeHour = now.getHours();
let timeMin = now.getMinutes();

let formattedTime = `${timeHour}:${timeMin.toString().padStart(2, "0")}`;
let currentTime = document.querySelector(".time");
currentTime.innerHTML = `${formattedTime}`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentDay = document.querySelector(".monday");
currentDay.innerHTML = `${day}`;

function showTemperature(response) {
  let temperature = response.data.main.temp;
  console.log(temperature);
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${temperature}`;

  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let wind = response.data.wind.deg;

  let desc = document.querySelector(".desc");
  desc.innerHTML = `${description}`;

  let humid = document.querySelector("#humid");
  humid.innerHTML = `Humidity ${humidity}%`;

  let winds = document.querySelector("#winds");
  winds.innerHTML = `Wind ${wind} degrees`;
}

function searchCity(event) {
  event.preventDefault();
  let inputValue = document.querySelector(".form-control").value;
  let city = `${inputValue}`;
  let cityDisplay = document.querySelector("h1");
  cityDisplay.innerHTML = `${city}`;
  let apiKey = "85eb492005f5eff1e67c2fd81be36e95";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let display = document.querySelector("#city-search-form");
display.addEventListener("submit", searchCity);

function getCurrentPosition(response) {
  let temperature = response.data.main.temp;
  console.log(temperature);
}

function currentLocation(event) {
  alert(`It is ${temperature} degrees`);
}
let displayCurrent = document.querySelector("#current-location-btn");
displayCurrent.addEventListener("click", currentLocation);

navigator.geolocation.getCurrentPosition;
