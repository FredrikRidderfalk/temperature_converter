function celsiusToFahrenheitConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML = valNum * 1.8 + 32;
}

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}
