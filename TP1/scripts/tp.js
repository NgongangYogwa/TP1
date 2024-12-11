var CurrentOperation = null;
var FirstValue = null;
var SecondValue = null;
function clearResult() {
    document.getElementById('resultat').value = "";
    CurrentOperation = null;
    FirstValue = null;
    SecondValue = null;
}
function appendToResult(value) {
    var resultInput = document.getElementById('resultat');
    resultInput.value += value;
}
function setOperation(operation) {
    var resultInput = document.getElementById('resultat');
    FirstValue = parseFloat(resultInput.value);
    CurrentOperation = operation;
    resultInput.value = '';
}
function calculateResult() {
    var resultInput = document.getElementById('resultat');
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
function cosinus() {
    var resultInput = document.getElementById('resultat');
    const angleRadians = resultInput.value
    resultat.value = Math.cos(angleRadians * Math.PI / 180)
}
function sinus() {
    var resultInput = document.getElementById('resultat');
    const angleRadians = resultInput.value
    resultat.value = Math.sin(angleRadians * Math.PI / 180)
}
function tangente() {
    var resultInput = document.getElementById('resultat');
    const angleRadians = resultInput.value
    resultat.value = Math.tan(angleRadians * Math.PI / 180)
}
function logarithme() {
    var resultInput = document.getElementById('resultat');
    const angleRadians = resultInput.value
    resultat.value = Math.log(angleRadians * Math.PI / 180)
}
function raci() {
    var resultInput = document.getElementById('resultat');
    var numero = Math.sqrt(resultInput.value)
    resultat.value = numero
}
function exp() {
    var resultInput = document.getElementById('resultat');
    var numero = Math.exp(resultInput.value)
    resultat.value = numero
}
function facto() {
    var resultInput = document.getElementById('resultat');
    var i, num, f;
    f = 1
    num = resultat.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    resultat.value = f;
}
function hex() {
    var resultInput = document.getElementById('resultat');
    try {
        const vy = resultat.value;
        const decimal = parseInt(vy, 16);
        resultat.value = decimal
    } catch {
        resultat.value = 'syntaxe Error'
    }
}
function dec() {
    var resultInput = document.getElementById('resultat');
   const vy = resultat.value
    const base10 = parseInt(vy, 10);
    resultat.value = base10
}
function bi() {
    var resultInput = document.getElementById('resultat');
    try {
        const ld = parseInt(resultat.value, 10);
        const hexadecimal = ld.toString(2);
        resultat.value = hexadecimal.toUpperCase();
    } catch {
        resultat.value = 'System Error'
    }
}
/*function modulo(){
var ecran : any = document.getElementById("message")?.innerHTML;
var resultat : any = document.getElementById("buttonmodulo")?.innerHTML;
var mess : any = document.getElementById("message")?
mess.innerHTML +=resultat.value;
}
*/
document.addEventListener('DOMContentLoaded',function(){
    const landry=document.querySelectorAll('.Scientifique');
    const vianey=document.getElementById('Normal');
    const schimit=document.getElementById('scientife');
    
    vianey.addEventListener('click',function(){
        landry.forEach(button =>{
            button.style.display='none'
        });
    });
    
    schimit.addEventListener('click',function(){
        landry.forEach(button =>{
            button.style.display='block'
        });
    });
});
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0- 23
    var m= date.getMinutes(); // 0 -59
    var s = date.getSeconds(); // 0 -59
    var session = "AM";
    if(h ==0){
        h=12;
    }
    if(h>12){
        h = h -12;
        session = "PM";
    }
    h=(h<10) ? "0" + h : h;
    m= (m<10) ? "0" + m:m;
    s=(s<10) ? "0" + s :s;

    var time =h +":" + m + ":" + s + "" + session;
    document.getElementById("MyClockDisplay").innerText=time;
    document.getElementById("MyClockDispaly").textContent =time;

    setTimeout(showTime, 1000);
}
showTime();
