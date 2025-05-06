
// DOM Elementleri
const firstNumberEl = document.getElementById("num1");
const secondNumberEl = document.getElementById("num2");
const btnSumEl = document.getElementById("btnSum");
const btnMultiplyEl = document.getElementById("btnMultiply");
const outputEl = document.querySelector("p");

// Event
btnSumEl.addEventListener("click", () => {

    const firstNumber = +firstNumberEl.value;
    const secondNumber = +secondNumberEl.value;

    const sumValue = sum(firstNumber, secondNumber);

    outputEl.innerText = `İşlemin Sonucu: ${sumValue}`;

});

btnMultiplyEl.addEventListener("click", () => {
  const firstNumber = +firstNumberEl.value;
  const secondNumber = +secondNumberEl.value;

  const multiplyValue = multiply(firstNumber, secondNumber);

  outputEl.innerText = `İşlemin Sonucu: ${multiplyValue}`;
});

// Function
function sum(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}