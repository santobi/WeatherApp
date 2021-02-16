// "13cb3b0832726e4d856641a3669a62d8"

const btn = document.querySelector(".btn");
const cityInput = document.querySelector(".cityInput");
const countryInput = document.querySelector(".countryInput");
const temperatureData = document.querySelector(".temperatureData p");
const tempDesc = document.querySelector(".tempDesc p");
const weatherIcon = document.querySelector(".weatherIcon");
const locationCity = document.querySelector(".locationCity p");
const tempHigh = document.querySelector(".tempHigh p");
const tempLow = document.querySelector(".tempLow p");

temperature = {
  unit: "celsius"
};

const KELVIN = 273.15;

btn.addEventListener("click", function() {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value},${countryInput.value}&appid=13cb3b0832726e4d856641a3669a62d8`
  )
    .then(function(response) {
      let data = response.json();
      return data;
    })
    .then(data => {
      cityInputValue = data["name"];
      locationCityValue = data["name"];
      countryInputValue = data["sys"]["country"];
      temperatureDataValue = Math.floor(data["main"]["temp"] - [KELVIN]);
      tempDescValue = data["weather"][0]["description"];
      weatherIconValue = data["weather"][0]["icon"];
      tempHighValue = Math.floor(data["main"]["temp_max"] - [KELVIN]);
      tempLowValue = Math.floor(data["main"]["temp_min"] - [KELVIN]);
      humidityValue = data["main"]["humidity"];

      cityInput.innerHTML = cityInputValue;
      locationCity.innerHTML = locationCityValue;
      countryInput.innerHTML = countryInputValue;
      temperatureData.innerHTML = `${temperatureDataValue}°<span>F</span>`;
      tempDesc.innerHTML = tempDescValue;
      weatherIcon.innerHTML = `<img src="icons/${weatherIconValue}.png"/>`;
      tempHigh.innerHTML = `${tempHighValue}°<span>F</span>`;
      tempLow.innerHTML = `${tempLowValue}°<span>F</span>`;
      humidity.innerHTML = `<p>${humidityValue}<p>`;
    })
    .catch(err => alert("City Not Found"));
});

// C to F conversion
function celsiusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
// temperatureData.addEventListener("click", function() {
//   if (temperatureData === temperature) return;

//   if (temperature.unit == "celsius") {
//     let fahrenheit = celsiusToFahrenheit(temperature.value);
//     fahrenheit = Math.floor(fahrenheit);

//     temperatureData.innerHTML = `${fahrenheit}°<span>F</span>`;
//     temperature.unit = "fahrenheit";
//   } else {
//     temperatureData.innerHTML = `${temperature.value}°<span>C</span>`;
//     temperature.unit = "celsius";
//   }
// });
