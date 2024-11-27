let currentOperation: string | null = null;
let firstValue: number | null = null;
let secondValue: number | null = null;

function ClearResult() {
    (document.getElementById('result')as HTMLInputElement).value = "";
    CurrentOperation = null;
    FirstValue = null;
    SecondValue = null;
}

function AppendToResult(value: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value += value;
}

function SetOperation(operation: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    FirstValue = parseFloat(resultInput.value);
    CurrentOperation = operation;
    resultInput.value = '';
}

function CalculateResult() {
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

function Add(a: number, b: number): number {
    return a + b;
}

function Subtract(a: number, b: number): number {
    return a - b;
}

function Multiply(a: number, b: number): number {
    return a * b;
}

function Divide(a: number, b: number): number {
    if (b === 0) {
        alert('Division par zéro impossible');
        return 0;
    }
    return a / b;
}