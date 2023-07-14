// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentHumidity = document.querySelector('#current-hum');

// lat: 33.1580900, lon: -117.3505900 of Carlsb bad California
const currentweather = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1580900&lon=-117.3505900&units=imperial&appid=93c38752305ca77c6133640779c32982';
const threedayforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1580900&lon=-117.3505900&units=imperial&appid=93c38752305ca77c6133640779c32982';

async function apiFetch() {
  try {
      const response = await fetch(currentweather);
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
  humidity.innerHTML = `${weatherData.main.humidity}`;
    
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

// function to get thre day forecast

async function threeDay () {
   let data
   // Get the folloing three days
   let forecastDate = new Date()
   let arrayDays = [(new Date(forecastDate.setDate(forecastDate.getDate()+1))).toLocaleDateString('en-US'),
                    new Date(forecastDate.setDate(forecastDate.getDate()+1)).toLocaleDateString('en-US'),
                    new Date(forecastDate.setDate(forecastDate.getDate()+1)).toLocaleDateString('en-US')
                    ]
  console.log(arrayDays)
    try {
        const response = await fetch(threedayforecast);
        if (response.ok) {
            data = await response.json();
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    let forecastObjects = []

    forecastObjects = data.list.filter((item) => {
    
      return arrayDays.includes(new Date(item.dt_txt).toLocaleDateString("en-US")) && new Date(item.dt_txt).getHours() === 12;
    
    });
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    document.querySelector("#dayone-temp").textContent = forecastObjects[0].main.temp
    document.querySelector("#daytwo-temp").textContent = forecastObjects[1].main.temp
    document.querySelector("#daythree-temp").textContent = forecastObjects[2].main.temp
    
    document.querySelector("#dayone-date").textContent = days[(new Date(arrayDays[0]).getDay())]
    document.querySelector("#daytwo-date").textContent = days[(new Date(arrayDays[1]).getDay())]
    document.querySelector("#daythree-date").textContent = days[(new Date(arrayDays[2]).getDay())]
  
}
threeDay()

apiFetch();



