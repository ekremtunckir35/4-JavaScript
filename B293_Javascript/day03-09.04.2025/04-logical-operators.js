console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("-------------------");
// ================================

// && (ve) operatörü her zaman İLK false değerini almaya çalışır. Eğer false değeri yoksa son değeri alır.

let x = 15;
let y = 20;
console.log(x && y);

let a = 10;
let b = 0; // falsy
console.log(a && b);

let m = null; // falsy
let n = 8;
console.log(m && n);

let e = undefined;
let f = "";
console.log(e && f);


// || (veya) operatörü her zaman İLK true değerini almaya çalışır. Eğer true değeri yoksa son değeri alır.

let num1 = 12;
let num2 = 15;
console.log(num1 || num2);

let myNull = null;
let myUndef;
console.log(myNull || myUndef);

console.log("" && "123" || NaN ); // NaN


console.log(!true); // false
console.log(!false); // true

console.log(!"123"); // false
console.log(!0); // true

console.log(Boolean("123")); // true
console.log(!!"123"); // true
// Bir data tipini boolean yapmak için Boolean() veya !! kullanılabilir.