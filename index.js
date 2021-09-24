const celsiusInput = document.querySelector("#inputCelsius");
const fahrenheitInput = document.querySelector("#inputFahrenheit");

const inputs = document.querySelectorAll(".input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", (e) => {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celsius":
        fahrenheitInput.value = (value * 1.8 + 32).toFixed(1);
        break;
      case "fahrenheit":
        celsiusInput.value = ((value - 32) / 1.8).toFixed(1);
        break;
    }
  });
}
