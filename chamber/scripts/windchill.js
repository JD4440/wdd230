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


let tempFarenheit = CelsiusToFarenheit(tempCelsius);
let windSpeedMPH = ConvertKPHToMPH(kph);

document.querySelector('#tempCurrent').innerHTML = temp;
document.querySelector('#windSpeed').innerHTML = windSpeed
document.querySelector('#windChill').innerHTML = "N/A"







