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

function searchCity(event) {
    event.preventDefault();
    let city = document.querySelector("#input-city");
    let displayCityName = document.querySelector("#display-city-name");
    displayCityName.innerHTML = `${city.value}`;
}
let enterCity = document.querySelector("#enter-city-form");
enterCity.addEventListener("submit", searchCity); 

function displayCelcius(event) {
    event.preventDefault();
    let tempTodayCelcius = document.querySelector("#temp-today");
    tempTodayCelcius.innerHTML = `16`;
}
let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", displayCelcius);

function displayFarenheit(event) {
    event.preventDefault();
    let tempTodayFarenheit = document.querySelector("#temp-today");
    tempTodayFarenheit.innerHTML = `61`;
}
let farenheit =document.querySelector("#farenheit");
farenheit.addEventListener("click", displayFarenheit);