// ===== PRIMITIVE (İLKEL) =====

// STRING
let isim = "Ali";
let soyisim = 'Demir';
console.log(isim); // Ali
console.log(soyisim); // Demir
console.log(typeof isim); // string

// NUMBER
let yas = 18;
console.log(yas); // 18
console.log(typeof yas); // number

const kdv = 1.18;
console.log(kdv); // 1.18
console.log(typeof kdv); // number
let negativeNumber = -100;
console.log(negativeNumber); // -100

let maxNum = Number.MAX_VALUE
console.log(maxNum); // 1.7976931348623157e+308
let maxSafeNumber = Number.MAX_SAFE_INTEGER;
console.log(maxSafeNumber); // 9007199254740991

// BIGINT
let x = 100n;
console.log(x); // 100n
console.log(typeof x); // bigint

console.log(x + 1n);  // 101n
// bigint ile number arasında bazı işlemler yapılamaz.

// BOOLEAN
let isRetired = true;
let isWorking = false;
console.log(isRetired); // true
console.log(isWorking); // false
console.log(typeof isRetired, typeof isWorking); // boolean boolean

// SYMBOL
let mySymbol = Symbol("id");
console.log(mySymbol); // Symbol(id)
console.log(typeof mySymbol);

// UNDEFINED
let undef;
console.log(undef); // undefined
console.log(typeof undefined); // undefined

// NULL
let myNull = null;
console.log(myNull); // null
console.log(typeof myNull); // object


// ===== NON-PRIMITIVE (İLKEL OLMAYAN) =====

// ARRAY
let myArray = [1,2,3,4, "Bes"];
let myNames = ["John", "Doe" , false];
console.log(myArray); // [1, 2, 3, 4, 'Bes']
console.log(myNames); // ['John', 'Doe', false]
console.log(typeof myArray, typeof myNames); // object object

// OBJECT
let myObject = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    id: 5,
};


console.log(myObject); // {id: 1, firstName: 'John', lastName: 'Doe', age: 30}
console.log(typeof myObject); // object

console.log(myObject.lastName); // Doe


// FUNCTION
function ortalamaHesapla(){

}
console.log(typeof ortalamaHesapla); // function


// ==============================================

// JavaScript data types tanımlamada dinamiktir. Bir değişken sonradan bir değer ataması yapıldığında data type'ını kendisi dönüştürür. 

let general = "Hello";
console.log(typeof general);
general = 12;
console.log(typeof general);
general = 10n;
console.log(typeof general);
general = true;
console.log(typeof general);
general = Symbol("unique");
console.log(typeof general);
general = undefined;
console.log(typeof general);
general = null;
console.log(typeof general);
general = [1];
console.log(typeof general);
general = {};
console.log(typeof general);
general = () => {}
console.log(typeof general);