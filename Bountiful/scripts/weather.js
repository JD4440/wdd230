// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');
const currentHumidity = document.querySelector('#current-hum');

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

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)}`; 
  windSpeed.innerHTML = `${((weatherData.wind.speed) * 3.6).toFixed(1)}`;
  humidity.innerHTML = `${weatherData.main.humidity}`;
    
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

    let tempfarenheit = CelsiusToFarenheit(currentTemp.innerHTML)

    let windSpeedMph = ConvertMSToMPH(windSpeed.innerHTML)

  // display windchill
  
    if (tempfarenheit <= 50 && windSpeedMph >3) {
        console.log (tempfarenheit)
        console.log (windSpeedMph)
        let windChill = CalculateWindChill(tempfarenheit, windSpeedMph)
        document.querySelector('#windChill').innerHTML = Math.floor((windChill-32)*(5/9))
    }
    else {
        document.querySelector('#windChill').innerHTML = "N/A"
    }}

function CelsiusToFarenheit (tempCelsius) {
    let farenheit = (tempCelsius * 9 / 5) + 32;
    return farenheit;
}

function ConvertMSToMPH(windspeed) {
    let mph = windspeed * 2.2369362920544 ;
    return mph;
}

function CalculateWindChill (t, s) {
    let windChill = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16);
    return windChill;
}


apiFetch();