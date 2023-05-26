// Assume values are Cel and kph
const temp = 5;
const windSpeed = 15;

function CelsiusToFarenheit (tempCel) {
    let celsius = (tempCelsius * 9 / 5) + 32;
    return celsius;
}

function CalculateWindChill (t, s) {
    let windChill = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16);
    return windChill;
}

// load default values
document.querySelector('#temperature').innerHTML = temp
document.querySelector('#windSpeed').innerHTML = windSpeed
document.querySelector('windChill').textContent = windChill


