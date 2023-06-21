// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// lat: 53.90017000, lon: -110.90170000 of ELk Point Alberta
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=53.90017000&lon=-110.90170000&units=metric&appid=93c38752305ca77c6133640779c32982';

//const url = 'http://api.openweathermap.org/data/2.5/weather?q={city}&appid=93c38752305ca77c6133640779c32982';

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          // console.log(data);
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`; 

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}


// Temp is Celsius, Windseep is kph
//<=50°F(10°C) and >3.0mph(4.83kmh)

const temp = 5;
const windSpeed = 15;

function CelsiusToFarenheit (tempCelsius) {
    let farenheit = (tempCelsius * 9 / 5) + 32;
    return farenheit;
}

function ConvertKPHToMPH (kph) {
    let mph = kph * 0.621371;
    return mph;
}

function CalculateWindChill (t, s) {
    let windChill = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16);
    return windChill;
}

document.querySelector('#tempCurrent').innerHTML = temp
document.querySelector('#windSpeed').innerHTML = windSpeed

let tempfarenheit = CelsiusToFarenheit(temp)
let windSpeedMph = ConvertKPHToMPH (windSpeed)


if (tempfarenheit <= 50 && windSpeedMph >3) {
    let windChill = CalculateWindChill(tempfarenheit, windSpeedMph)
    document.querySelector('#windChill').innerHTML = Math.floor((windChill-32)*(5/9))
}
else {
    document.querySelector('#windChill').innerHTML = "N/A"
}





