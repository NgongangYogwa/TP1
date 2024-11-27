var CurrentOperation = null;
var FirstValue = null;
var SecondValue = null;
function clearResult() {
    document.getElementById('result').value = "";
    CurrentOperation = null;
    FirstValue = null;
    SecondValue = null;
}
function appendToResult(value) {
    var resultInput = document.getElementById('result');
    resultInput.value += value;
}
function setOperation(operation) {
    var resultInput = document.getElementById('result');
    FirstValue = parseFloat(resultInput.value);
    CurrentOperation = operation;
    resultInput.value = '';
}
function calculateResult() {
    var resultInput = document.getElementById('result');
    SecondValue = parseFloat(resultInput.value);
    if (FirstValue === null || SecondValue === null || CurrentOperation === null) {
        return;
    }
    var result;
    switch (CurrentOperation) {
        case '+':
            result = Add(FirstValue, SecondValue);
            break;
        case '-':
            result = Subtract(FirstValue, SecondValue);
            break;
        case '*':
            result = Multiply(FirstValue, SecondValue);
            break;
        case '/':
            result = Divide(FirstValue, SecondValue);
            break;
        default:
            return;
    }
    resultInput.value = result.toString();
    CurrentOperation = null;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        alert('Division par zéro impossible');
        return 0;
    }
    return a / b;
}
