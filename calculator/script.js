let expression = '';

function appendValue(value) {
    expression += value;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}
