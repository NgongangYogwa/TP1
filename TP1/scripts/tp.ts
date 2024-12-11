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
function cosinus(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const angleRadians = parseFloat(resultInput.value);
    resultInput.value = Math.cos(angleRadians * Math.PI / 180).toString();
}

function sinus(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const angleRadians = parseFloat(resultInput.value);
    resultInput.value = Math.sin(angleRadians * Math.PI / 180).toString();
}

function tangente(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const angleRadians = parseFloat(resultInput.value);
    resultInput.value = Math.tan(angleRadians * Math.PI / 180).toString();
}

function logarithme(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const angleRadians = parseFloat(resultInput.value);
    resultInput.value = Math.log(angleRadians * Math.PI / 180).toString();
}

function raci(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const numero = Math.sqrt(parseFloat(resultInput.value));
    resultInput.value = numero.toString();
}

function exp(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const numero = Math.exp(parseFloat(resultInput.value));
    resultInput.value = numero.toString();
}

function facto(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    let f = 1;
    const num = parseInt(resultInput.value, 10);
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    resultInput.value = f.toString();
}

function hex(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const vy = resultInput.value;
    try {
        const decimal = parseInt(vy, 16);
        resultInput.value = decimal.toString();
    } catch {
        resultInput.value = 'Syntax Error';
    }
}

function dec(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    const vy = resultInput.value;
    const base10 = parseInt(vy, 10);
    resultInput.value = base10.toString();
}

function bi(): void {
    const resultInput = document.getElementById('resultat') as HTMLInputElement;
    try {
        const ld = parseInt(resultInput.value, 10);
        const hexadecimal = ld.toString(2);
        resultInput.value = hexadecimal.toUpperCase();
    } catch {
        resultInput.value = 'System Error';
    }
}

function modulo(): void {
    const ecran = document.getElementById("message")?.innerHTML;
    const resultat = document.getElementById("buttonmodulo")?.innerHTML;
    const mess = document.getElementById("message");
    if (mess && resultat) {
        mess.innerHTML += resultat;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const landry = document.querySelectorAll('.Scientifique') as NodeListOf<HTMLElement>;
    const vianey = document.getElementById('Normal') as HTMLButtonElement;
    const schimit = document.getElementById('scientife') as HTMLButtonElement;

    vianey.addEventListener('click', function() {
        landry.forEach(button => {
            button.style.display = 'none';
        });
    });

    schimit.addEventListener('click', function() {
        landry.forEach(button => {
            button.style.display = 'block';
        });
    });
});

function showTime(): void {
    const date = new Date();
    let h: number = date.getHours(); // 0- 23
    let m: number = date.getMinutes(); // 0 -59
    let s: number = date.getSeconds(); // 0 -59
    let session: string = "AM";

    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h -= 12;
        session = "PM";
    }

    h = (h < 10) ? Number("0" + h) : h;
    m = (m < 10) ? Number("0" + m) : m;
    s = (s < 10) ? Number("0" + s) : s;

    const time: string = `${h}:${m}:${s} ${session}`;
    const clockDisplay = document.getElementById("MyClockDisplay") as HTMLElement;
    const clockDisplayAlt = document.getElementById("MyClockDispaly") as HTMLElement;

    if (clockDisplay) clockDisplay.innerText = time;
    if (clockDisplayAlt) clockDisplayAlt.textContent = time;

    setTimeout(showTime, 1000);
}

showTime();