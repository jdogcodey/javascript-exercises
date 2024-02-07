const convertToCelsius = function(temp) {
let newTemp = ((temp-32)*5)/9;
let rounded = Math.round(newTemp * 10) / 10;
return rounded;
};

const convertToFahrenheit = function(temp) {
let newTemp = (temp*1.8)+32;
let rounded = Math.round(newTemp * 10) / 10;
return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
