//#region operations

const add = function (a, b) {
  let result = a + b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

const subtract = function (a, b) {
  let result = a - b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

const multiply = function (a, b) {
  let result = a * b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

const divide = function (a, b) {
  let result = a / b;
  if (result != 0) {
    return result;
  } else {
    return 0;
  }
};

// const sum = function (numbers) {
//   let result = 0;
//   numbers.forEach((element) => (result += element));
//   if (result != 0) {
//     return result;
//   } else {
//     return 0;
//   }
// };

// const multiply = function (numbers) {
//   let result = numbers[0];
//   numbers.shift();
//   numbers.forEach((element) => (result *= element));
//   if (result != 0) {
//     return result;
//   } else {
//     return 0;
//   }
// };

// const power = function (a, b) {
//   let result = Math.pow(a, b);
//   return result;
// };

// const factorial = function (a) {
//   let result = 1;
//   if (a != 0 && a != 1) {
//     for (i = a; i >= 1; i--) {
//       result *= i;
//     }
//     return result;
//   } else {
//     return 1;
//   }
// };

//#endregion

//#region variables
var number1;
var number2;
var operator;
const display = document.getElementById("screen");
const zeroButton = document.getElementById("0");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");
const addButton = document.getElementById("+");
const subButton = document.getElementById("-");
const multButton = document.getElementById("*");
const divButton = document.getElementById("/");
const equalButton = document.getElementById("=");
const clrButton = document.getElementById("CLR");
const buttons = document.querySelectorAll("button");

const currentValues = [];

//#endregion

buttons.forEach((element) => {
  if (element != clrButton && element != equalButton) {
    element.onclick = function enterInputs() {
      if (isNaN(element.innerHTML)) {
        display.innerHTML += element.innerHTML + " ";
      } else {
        display.innerHTML += element.innerHTML;
      }
      currentValues.push(element.innerHTML);
    };
  } else if (element == clrButton) {
    element.onclick = function clearInputs() {
      display.innerHTML = "";
      currentValues = [];
    };
  }
});

const operate = function () {
  while (currentValues.length < 1) {

  function defineNumbersAndOperator() {
    if (isNaN(currentValues[0])) {
      operator = currentValues[0];
      currentValues.shift()
      break;
    } else {
      number1 += currentValues[0];
      currentValues.shift()
    }
  

  console.log("first number =" + number1)
  console.log("operator =" + operator)

  if (isNaN(currentValues[0])) {
    break;
  } else {
    number2 += currentValues[0];
    currentValues.shift()
  }


  console.log("second number" + number2)

}
function operation() {

  if (operator == "+") {
    let result = add(number1, number2);
    currentValues.splice(0, 0, result);
  } else if (operator == "-") {
    let result = subtract(number1, number2);
    currentValues.splice(0, 0, result);
  } else if (operator == "/") {
    let result = divide(number1, number2);
    currentValues.splice(0, 0, result);
  } else if (operator == "*") {
    let result = multiply(number1, number2);
    currentValues.splice(0, 0, result);
  };
}
}}
