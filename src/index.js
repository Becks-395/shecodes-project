let rightNow = new Date();
function formatDate(date) {
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  let now = `${currentDay} ${currentHour}:${currentMinute}`;

  return now;
}
let displayDateTime = document.querySelector(".date-time");
displayDateTime.innerHTML = formatDate(new Date());

function currentTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempToday = document.querySelector("#temp-today");
  tempToday.innerHTML = `${temperature}°C`;
}

function searchCity(event) {
event.preventDefault();
let city = document.querySelector("#input-city");
let displayCityName = document.querySelector("h1");
displayCityName.innerHTML = `${city.value}`;
let apiKey = "306b2c7792e2f4d64e57a44d766b9a83";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(currentTemp);
}

let enterCity = document.querySelector("#enter-city-form");
enterCity.addEventListener("submit", searchCity); 

function showCurrent(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempToday = document.querySelector("#temp-today");
  tempToday.innerHTML = `${temperature}°C`;
  let displayCityName = document.querySelector("h1");
    displayCityName.innerHTML = response.data.name;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(
    `Your Latitude is ${latitude} and your longitude is ${longitude}`
  );
  let apiKey = "306b2c7792e2f4d64e57a44d766b9a83";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showCurrent);
}
function geoLocation() {
    navigator.geolocation.getCurrentPosition(showPosition)
}
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", geoLocation);
