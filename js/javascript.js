
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

