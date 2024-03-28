const convertToCelsius = function (tempFahr) {
  let tempCel = (tempFahr - 32) * (5 / 9);
  return round(tempCel, 1);
};

const convertToFahrenheit = function (tempCel) {
  let tempFahr = tempCel * (9 / 5) + 32;
  return round(tempFahr, 1);
};

function round(number, decimalNumber) {
  return (
    Math.round(number * Math.pow(10, decimalNumber)) /
    Math.pow(10, decimalNumber)
  );
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
