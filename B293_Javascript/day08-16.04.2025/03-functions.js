
// Parametresiz ve return'süz fonksiyon:
function twoPlusTwo(){
    console.log(2+2);
}

twoPlusTwo(); // 4
twoPlusTwo(); // 4
twoPlusTwo(); // 4

// Parametreli ama return'süz fonksiyon:
function sumOfTwoNumbers(numberOne, numberTwo){

    console.log(numberOne + numberTwo);

}

sumOfTwoNumbers(1,5); // 6
sumOfTwoNumbers(12,3); // 15
sumOfTwoNumbers("John " , "Doe");

let result1 = twoPlusTwo();
console.log(result1); // undefined
let result2 = sumOfTwoNumbers(5,5);
console.log(result2); // undefined

// Return'lü fonksiyon
function multiplicationOfTwoNumber(numberOne, numberTwo){

    console.log("Fonksiyon başladı");

    return (numberOne * numberTwo);

    console.log("Bu console.log return'den sonra gelidiği için çalışmayacak.");

}

let result3 = multiplicationOfTwoNumber(2,2);
console.log(result3);