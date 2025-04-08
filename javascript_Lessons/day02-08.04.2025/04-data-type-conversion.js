let para = "100";
let vergi = 10;

console.log(para + vergi); // 10010
console.log(Number(para) + vergi); // 110

let isim = "John";
console.log(isim + vergi); // John10
console.log(Number(isim) + vergi); // NaN

// Eğer bir data tipini number'a çevirmek istiyorsak Number() veya + işaretini kullanabilir.

console.log( +para + vergi);