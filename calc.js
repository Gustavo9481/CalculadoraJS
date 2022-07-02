// Calculadora básica - sin interfaz | Basic Calculator - no User Interface

 
// Funciones para operaciones | Functions for operations
const sum = (num1,num2) => {
  return parseInt(num1) + parseInt(num2);
}

const subtract = (num1,num2) => {
  return parseInt(num1) - parseInt(num2);
}

const multiply = (num1,num2) => {
  return parseInt(num1) * parseInt(num2);
}

const divide = (num1,num2) => {
  return parseInt(num1) / parseInt(num2);
}


// run app *****************************************************************
let num1 = prompt("enter first value");
let num2 = prompt("enter second value");
let select = prompt(`enter operation, select an number of option =>
sum:[1]  subtract:[2]  multiply:[3]  divide:[4]`);
var result = 0;

// Conditions for selected operation ***************************************
if (select === "1") {
  let result = sum(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "2") {
  let result = subtract(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "3") {
  let result = multiply(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "4") {
  let result = divide(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else {
  alert("The selection not exist, try again");
}


