let x = 50;
let y = "50";
let z = 100;
let a = 50;

console.log(x == y); // true => değerelere bakıp karşılaştırma yapar. Stringi number'a çevirir.
console.log(x == z); // false

console.log(x === y); // false => çünkü hem data tipine hem de değere bakar
console.log(typeof(x), typeof(y));

console.log(a == x); // true => hem data tipi hem de değer eşittir.
console.log(typeof a , typeof x);


console.log(x != y); // false => ikisinin de değerine bakar eğer eşitse false verir, değilse true verir
console.log(x != z); // true

console.log(x !== y); // true
console.log(a !== x); // false


console.log("------------");

console.log(100 > 50); // true
console.log(100 < 50); // false
console.log(50 >= 50); // true
console.log(50 > "40"); // true

// String Number karşılaştırmaları eğer string number'a NaN olarak çevriliyorsa karşılaştırma her zaman false değeri verir.
console.log(1 < "elma"); // false
console.log(1 > "elma"); // false
console.log(1 == "elma"); // false

// String - String Karşılaşırmaları
console.log("9" > "1000"); // true
console.log("1000000" > "9"); // false

console.log("elma" > "armut"); // true => ASCII değerlerine bakar.

let number = 10;

number -= 5;
console.log(number);
number += 10;
console.log(number);
number *= 2;
console.log(number);
number /= 6;
console.log(number);
number **= 2;
console.log(number);
number %= 3;
console.log(number);

number &= 0; // number = (number && 0)
console.log(number);

number |= 10;
console.log(number); // number = (number || 10)

// Yukarıdaki atama operatörleri hem aritmetik işlem yapacak hem de işlem sonucunu değişkene atayacaktır. Bu yüzden eğer değişkenin değişmemesi gerekiyorsa aritmetik operatörler atamasız bir şekilde kullanılmalıdır.