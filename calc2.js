// Calculadora básica - sin interfaz | Basic Calculator - no User Interface
// Aplicación de Programación orientada a Objetos y Math básico
 
class Calculator {
  constructor() {}
// Funciones para operaciones | Functions for operations
  sum (num1,num2) {
    return parseInt(num1) + parseInt(num2);
  }

  subtract (num1,num2) {
    return parseInt(num1) - parseInt(num2);
  }

  multiply (num1,num2) {
    return parseInt(num1) * parseInt(num2);
  }

  divide  (num1,num2) {
    return parseInt(num1) / parseInt(num2);
  }

  exponential (num1,num2) {
    let numero = num1;
    for (var i = 1; i < num2; i++) {
      numero = numero * num1;
    }
    return numero;  // opción simple return num1**num2
  }

  sqrt (num1) {
    return Math.sqrt(num1);
  }

  cbrt (num1) {
    return Math.cbrt(num1);
  }
}

// object *****************************************************************
const calculator = new Calculator();



// run app *****************************************************************
let num1 = prompt("enter first value");
let select = prompt(`enter operation, select an number of option =>
sum:[1]  subtract:[2]  multiply:[3]  divide:[4]  exponential:[5]  square:[6]  cubic:[7]`);
var result = 0;

// Conditions for selected operation ***************************************
if (select === "1") {
  let num2 = prompt("enter sum value");
  let result = calculator.sum(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "2") {
  let num2 = prompt("enter subtract");
  let result = calculator.subtract(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "3") {
  let num2 = prompt("enter multiplier value");
  let result = calculator.multiply(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "4") {
  let num2 = prompt("enter divisor");
  let result = calculator.divide(num1,num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "5") {
  let num2 = prompt("enter exponent");
  let result = calculator.exponential(num1, num2);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "6"){
  let result = calculator.sqrt(num1);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`);
}
else if (select === "7"){
  let result = calculator.cbrt(num1);
  document.write(`<h1>The result is <b style="color:red">${result}</b></h1>`)
}
else {
  alert("The selection not exist, try again");
}




