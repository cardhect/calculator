function add(b) {
  const sum = b.reduce((acum, val) => (acum += val));
  return sum;
}

function subtract(b) {
  const sub = b.reduce((acum, val) => (acum -= val));
  return sub;
}

function multiply(b) {
  const mul = b.reduce((acum, val) => (acum *= val));
  return mul;
}

function divide(b) {
  const divide = b.reduce((acum, val) => (acum /= val));
  return divide;
}

function operate(a, b) {
  if (a == "+") {
    return add(b);
  } else if (a == "-") {
    return subtract(b);
  } else if (a == "*") {
    return multiply(b);
  } else if (a == "/") {
    return divide(b);
  }
}

// const operator = document.querySelectorAll(".op-item");
// const nums = document.querySelectorAll(".num-btn");
const display = document.querySelector("#display");
const btn = document.querySelectorAll("button");

let chosenOp = "";
let newOp = '';
let firstNum = "";
let secondNum = "";
let count = 0;
let displayVal = '';
let numArr = [];
display.textContent = 0;
btn.forEach((button) => {
  button.addEventListener("click", () => {
    

    if (
      button.id == "+" ||
      button.id == "-" ||
      button.id == "*" ||
      button.id == "/"
    ) {
      chosenOp = button.id;
      count++;
      console.log('count when op is chosen: ' + count);
      displayVal = '';
      //this will do the calculation of the first two numbers
      if (count == 2) {
        firstNum = operate(newOp, [parseInt(firstNum), parseInt(secondNum)]);
        console.log('first number: ' + firstNum);
        count = 1;
        secondNum = '';
        
      }
      if (count == 1) {
        display.textContent = firstNum;
      }
    } else if (button.id == "=") {

      firstNum = operate(chosenOp, [parseInt(firstNum), parseInt(secondNum)]);
      console.log('first number: ' + firstNum);
      display.textContent = firstNum;
      count = 0;
      console.log(count);
      secondNum = '';
      
    } else if (button.id == 'clear') {
      
       chosenOp = "";
       newOp = '';
       firstNum = "";
       secondNum = "";
       count = 0;
       displayVal = 0;

       display.textContent = displayVal;
    }

    //if a operator hasnt been clicked save the current given number
    if (parseInt(button.id) >= 0 && count == 0) {
      displayVal += button.id;
      display.textContent = displayVal;
      firstNum += button.id;
      console.log('First Number: ' + firstNum);
      //if a operator has been clicked this will save the second given number
    } else if (parseInt(button.id) >= 0 && count == 1) {
      
      displayVal += button.id;
      display.textContent = displayVal
      
      newOp = chosenOp;//new op is saved here?
      console.log(newOp);
      secondNum += button.id;
      console.log('Second Number: ' + secondNum);
    }

    console.log('count: ' + count);
  });
});
