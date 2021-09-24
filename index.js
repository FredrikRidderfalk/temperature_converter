function fahrenheitToCelsiusConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;
}

function celsiusToFahrenheitConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML = valNum * 1.8 + 32;
}
