
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

console.log(zero);
zero.addEventListener('click', () => {
    screen.textContent = '0';
    if (firstInteger === null) {
        firstInteger = 0;
    } else if (firstInteger !== null && operator === null) {
        firstInteger = (firstInteger + '0') - 0;
        screen.textContent = firstInteger;
    } else {
        secondInteger = 0;
    }
});


console.log(seven);
seven.addEventListener('click', () => {
    screen.textContent = '7';
    if (firstInteger === null) {
        firstInteger = 7;
    } else if (firstInteger !== null && operator === null) {
        firstInteger = (firstInteger + '7') - 0;
        screen.textContent = firstInteger;
    } else {
        secondInteger = 7;
    }
});

addition.addEventListener('click', () => {
    screen.textContent = firstInteger + ' +'
    operator = '+'
})

equals.addEventListener('click', () => {
    output = operate(operator, firstInteger, secondInteger);
    screen.textContent = output;
    firstInteger = output;
})

multiplication.addEventListener('click', () => {
    screen.textContent = firstInteger + ' x'
    operator = '*'
})

subtraction.addEventListener('click', () => {
    screen.textContent = firstInteger + ' -'
    operator = '-'
})

division.addEventListener('click', () => {
    screen.textContent = firstInteger + ' /'
    operator = '/'
})

let output = null;
let operator = null;
let firstInteger = null;
let secondInteger = null; 