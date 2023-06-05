function convertTemperature() {
  var input = document.getElementById("temperatureInput").value;
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");

  if (unit === "Celsius") {
      var fahrenheit = (input * 9/5) + 32;
      var kelvin = parseFloat(input) + 273.15;
      result.innerHTML = "Conversion of " + input + "°C = " + fahrenheit.toFixed(2) + "°F = " + kelvin.toFixed(2) + "K";
  }
  else if (unit === "Fahrenheit") {
      var celsius = (input - 32) * 5/9;
      var kelvin = (input - 32) * 5/9 + 273.15;
      result.innerHTML ="Conversion of " + input + "°F = " + celsius.toFixed(2) + "°C = " + kelvin.toFixed(2) + "K";
  }
  else if (unit === "Kelvin") {
      var celsius = parseFloat(input) - 273.15;
      var fahrenheit = (parseFloat(input) - 273.15) * 9/5 + 32;
      result.innerHTML ="Conversion of " + input + "K = " + celsius.toFixed(2) + "°C = " + fahrenheit.toFixed(2) + "°F";
  } 
}
