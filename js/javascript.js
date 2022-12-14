// TODO:
// update the "." so we can do decimal work
// update so that only 16 digits can be entered return 
//      error if there are more than 16 digits 



function add(integer1, integer2) {
    return integer1 + integer2;
};

function subtract(integer1, integer2) {
    return integer1 - integer2;
};

function multiply(integer1, integer2) {
    return integer1 * integer2;
};

function divide(integer1, integer2) {
    return integer1 / integer2;
};


function operate(operator, integer1, integer2) {
    let output = null;
    // console.log(operator)
    stringInteger1 = integer1.toString();
    stringInteger2 = integer2.toString();

    if (stringInteger1.slice(-1) === ".") {
        integer1 = stringInteger1.slice(0, -1) - 0;
    } else if (stringInteger2.slice(-1) === ".") {
       integer2 = stringInteger2.slice(0,-1) - 0;
    }
    switch (operator) {
        case '+':
            output = add(integer1, integer2);
            break;
        case '-':
            output = subtract(integer1, integer2);
            break;
        case '*':
            output = multiply(integer1, integer2);
            break;
        case '/':
            output = divide(integer1, integer2);
            break;
        default:
            output = 'Choose a proper operator'
    };
    return output;
};

const screen = document.querySelector('.screen');
console.log(screen);

const nine = document.querySelector('.nine');
const eight = document.querySelector('.eight');
const seven = document.querySelector('.seven');
const six = document.querySelector('.six');
const five = document.querySelector('.five');
const four = document.querySelector('.four');
const three = document.querySelector('.three');
const two = document.querySelector('.two');
const one = document.querySelector('.one');
const zero = document.querySelector('.zero');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');
const equals = document.querySelector('.equals');
const decimalPlace = document.querySelector('.period');


let query_list = [zero, one, two, three, four, five, six, seven, eight, nine]
console.log(query_list[3])

for (let i=0; i < query_list.length; i++) {
    query_list[i].addEventListener('click', () => {
        screen.textContent = i;
        if (firstInteger === "" && operator === null) {
            firstInteger = i;
        } else if (firstInteger !== "" && operator === null) {
            firstInteger = (firstInteger + i.toString()) - 0;
            screen.textContent = firstInteger;
        } else if (firstInteger !== null && operator !== null && secondInteger === null) {
            secondInteger = i;
        } else if (operator !== null && secondInteger !== null) {
            secondInteger = (secondInteger + i.toString()) - 0;
            screen.textContent = secondInteger;
        } else {
            firstInteger = i;
        }
    })
}

addition.addEventListener('click', () => {
    if (memory !== null && firstInteger == "" && secondInteger == null) {
        screen.textContent = memory + ' +';
    } else if (firstInteger !== "" && secondInteger !== null && operator !== null) {
        output = operate(operator, firstInteger, secondInteger);
        variableShift();
        screen.textContent = memory + ' +';
    } else if (memory !== null && operator !== null && secondInteger !== null) {
        output = operate(operator, memory, secondInteger);
        variableShift();
    }else {
        screen.textContent = firstInteger + ' +';
    }
    operator = '+';
})

equals.addEventListener('click', () => {
    if (firstInteger !== "") {
        output = operate(operator, firstInteger, secondInteger);
    } else if (firstInteger === "" && memory !== null) {
        output = operate(operator, memory, secondInteger);
    } 
    variableShift();
})

multiplication.addEventListener('click', () => {
    if (memory !== null && firstInteger == "" && secondInteger == null) {
        screen.textContent = memory + ' *';
    } else if (firstInteger !== "" && secondInteger !== null && operator !== null) {
        output = operate(operator, firstInteger, secondInteger);
        variableShift();
        screen.textContent = memory + ' *';
    } else if (memory !== null && operator !== null && secondInteger !== null) {
        output = operate(operator, memory, secondInteger);
        variableShift();
    }else {
        screen.textContent = firstInteger + ' *';
    }
    operator = '*';
})

subtraction.addEventListener('click', () => {
    if (memory !== null && firstInteger == "" && secondInteger == null) {
        screen.textContent = memory + ' -';
    } else if (firstInteger !== "" && secondInteger !== null && operator !== null) {
        output = operate(operator, firstInteger, secondInteger);
        variableShift();
        screen.textContent = memory + ' -';
    } else if (memory !== null && operator !== null && secondInteger !== null) {
        output = operate(operator, memory, secondInteger);
        variableShift();
    } else {
        screen.textContent = firstInteger + ' -';
    } 
    operator = '-';
})

division.addEventListener('click', () => {
    if (memory !== null && firstInteger == "" && secondInteger == null) {
        screen.textContent = memory + ' /';
    } else if (firstInteger !== "" && secondInteger !== null && operator !== null) {
        output = operate(operator, firstInteger, secondInteger);
        variableShift();
        screen.textContent = memory + ' /';
    } else if (memory !== null && operator !== null && secondInteger !== null) {
        output = operate(operator, memory, secondInteger);
        variableShift();
    }else {
        screen.textContent = firstInteger + ' /';
    }
    operator = '/';
})

decimalPlace.addEventListener('click', () => {
    screen.textContent = "."
    if (firstInteger === "" && operator === null) {
        firstInteger = ".";
    } else if (firstInteger !== "" && operator === null) {
        firstInteger = (firstInteger + ".");
        screen.textContent = firstInteger;
    } else if (firstInteger !== null && operator !== null && secondInteger === null) {
        secondInteger = ".";
    } else if (operator !== null && secondInteger !== null) {
        secondInteger = (secondInteger + '.');
        screen.textContent = secondInteger;
    } else {
        firstInteger = ".";
    }
})


function variableShift() {
    screen.textContent = output;
    memory = output;
    output = null;
    operator = null;
    firstInteger = "";
    secondInteger = null;
}

let output = null;
let operator = null;
let memory = null;
let firstInteger = "";
let secondInteger = null; 