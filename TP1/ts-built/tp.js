var currentOperation = null;
var firstValue = null;
var secondValue = null;
function ClearResult() {
    document.getElementById('result').value = "";
    CurrentOperation = null;
    FirstValue = null;
    SecondValue = null;
}
function AppendToResult(value) {
    var resultInput = document.getElementById('result');
    resultInput.value += value;
}
function SetOperation(operation) {
    var resultInput = document.getElementById('result');
    FirstValue = parseFloat(resultInput.value);
    CurrentOperation = operation;
    resultInput.value = '';
}
function CalculateResult() {
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
function Add(a, b) {
    return a + b;
}
function Subtract(a, b) {
    return a - b;
}
function Multiply(a, b) {
    return a * b;
}
function Divide(a, b) {
    if (b === 0) {
        alert('Division par zéro impossible');
        return 0;
    }
    return a / b;
}
