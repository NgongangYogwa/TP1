let CurrentOperation: string | null = null;
let FirstValue: number | null = null;
let SecondValue: number | null = null;

function clearResult() {
    (document.getElementById('result')as HTMLInputElement).value = "";
    CurrentOperation = null;
    FirstValue = null;
    SecondValue = null;
}

function appendToResult(value: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value += value;
}

function setOperation(operation: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    FirstValue = parseFloat(resultInput.value);
    CurrentOperation = operation;
    resultInput.value = '';
}

function calculateResult() {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    SecondValue = parseFloat(resultInput.value);

    if (FirstValue === null || SecondValue === null || CurrentOperation === null) {
        return;
    }

    let result: number;

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

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        alert('Division par zéro impossible');
        return 0;
    }
    return a / b;
}