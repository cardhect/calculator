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

const operator = document.querySelectorAll(".op-item");
const nums = document.querySelectorAll(".num-btn");
const display = document.querySelector("#display");
const btn = document.querySelectorAll('button');

let chosenOperator = '';
let pairVal = 0;
let count = 0;
let numArr = [];

operator.forEach((button) => {
//cycles through each button
  button.addEventListener("click", () => {
    
    //displays button clicked
    // display.textContent = button.id;
    chosenOperator = button.id;
    console.log(chosenOperator);

  });
});

let chosenNum = 0;

//cycling through the number buttons
nums.forEach((button) => {
  button.addEventListener("click", () => {
    //changes text in display to button clicked
    // display.textContent = button.id;
    
    //assigns chosen number to variable
    chosenNum = parseInt(button.id);
    console.log(chosenNum);

  });
});

let displayVal = '';

btn.forEach((button) => {
  button.addEventListener('click', () => {
//if chosen input is a number do this code
  if(numArr.length > 1) {
    pairVal = operate(chosenOperator,numArr);
    numArr[0] = pairVal;
    console.log(numArr);

  }
  else if (!isNaN(parseInt(button.id))) {
    displayVal += chosenNum;
    console.log('is a number' + displayVal);

    display.textContent = 'test c' + button.id;
    // numArr.push(chosenNum);

  } else if (count == 1 && button.id == '+' || button.id == '-' || button.id == '*' || button.id == '/' ) {
    
    display.textContent = 'test b' + displayVal;
    //adds display value to the end of the array
    numArr.push(parseInt(displayVal));
    //makes the operated number the first in the array.
    pairVal = operate(chosenOperator,numArr);
    numArr[0] = pairVal;
    
    //removes last array item
    numArr.pop();
    console.log(numArr);

    //reset the counter and display value
    count--;
    displayVal = '';
    console.log('second count' + count);
    

  } else if ( button.id == '+' || button.id == '-' || button.id == '*' || button.id == '/') {

    display.textContent ='test a' +  displayVal;
    numArr.push(parseInt(displayVal));
    console.log('num array' + numArr);
    count++;
    console.log('first count' + count);
    displayVal = '';
    console.log(displayVal);
    console.log(numArr);

    
  
  } 
  //FUTURE NOTE!! create a conditional statement that finds if the array is bigger than 1, use the operate function on the 2 values.

  });
});
