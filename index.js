/*
convertion numbers
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

ways to round the number
Math.round((totalPrice * 100)) / 100 (2 decimals)

this is probably the easiest way to round it
totalPrice.toFixed(2)(2 decimals)

*/
let numberInput = document.getElementById("number-input");

const convertBtn = document.getElementById("convert-btn");

let lengthOutput = document.getElementById("length-output");

let volumeOutput = document.getElementById("volume-output");

let massOutput = document.getElementById("mass-output");

const feetConverted = 3.281;

const gallonConverted = 0.264;

const poundConverted = 2.204;

// let convertedNumber = numberInput * type;

convertBtn.addEventListener("click", function () {
  let feet = numberInput.value * feetConverted;
  let meter = numberInput.value / feetConverted;
  lengthOutput.textContent = `${numberInput.value} meter(s) = ${feet.toFixed(
    3
  )} feet | ${numberInput.value} feet = ${meter.toFixed(3)} meter(s)`;
});

convertBtn.addEventListener("click", function () {
  let gallon = numberInput.value * gallonConverted;
  let liter = numberInput.value / gallonConverted;
  volumeOutput.textContent = `${numberInput.value} liter(s) = ${gallon.toFixed(
    3
  )} gallon(s) | ${numberInput.value} gallon(s) = ${liter.toFixed(3)} liter(s)`;
});

convertBtn.addEventListener("click", function () {
  let pound = numberInput.value * poundConverted;
  let kilogram = numberInput.value / poundConverted;
  massOutput.textContent = `${numberInput.value} kilo(s) = ${pound.toFixed(
    3
  )} pound(s) | ${numberInput.value} pound(s) = ${kilogram.toFixed(3)} kilo(s)`;
});

numberInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convertBtn.click();
  }
});
