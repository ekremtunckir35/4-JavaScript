//  ARRAY
// Diziler (Array), bir veri yapısı olup sıfır, bir veya birden fazla veriyi saklamak için kullanılır.

// 1. Tanımlama Yöntemi
// index           0       1         2            3
// length          1       2         3            4
const kurslar = ["HTML", "CSS", "Bootstrap", "JavaScript"];

console.log(kurslar); // ['HTML', 'CSS', 'Bootstrap', 'JavaScript']

console.log(typeof kurslar); // object
console.log(kurslar instanceof Array); // true

// 2. Tanımlama Yöntemi
const digerKurslar = new Array("SASS", "API", "React", "Next.js", "Proje");

console.log(digerKurslar); //  ['SASS', 'API', 'React', 'Next.js']
console.log(typeof digerKurslar); // object
console.log(digerKurslar instanceof Array); // true

// Array Elemanlarına Erişim
console.log(kurslar[0]); // HTML
console.log(kurslar[1]); // CSS
console.log(kurslar[2]); // Bootstrap
console.log(kurslar[3]); // JavaScript
console.log(kurslar[4]); // undefined

// Array Uzunluğu
console.log(kurslar.length); // 4
console.log(digerKurslar.length) // 5;

// Array'in Son Elemanına Erişim
console.log(kurslar[kurslar.length-1]);

// Array Verisi Eklemek veya Olan Veriyi Değiştirmek
kurslar[0] = "XML";
console.log(kurslar);
kurslar[1] = "Figma";
console.log(kurslar);

kurslar[4] = "Php";
console.log(kurslar);
kurslar[kurslar.length] = "Web";
console.log(kurslar);

console.log(kurslar.length);
kurslar[10] = "Motion";
console.log(kurslar); // ['XML', 'Figma', 'Bootstrap', 'JavaScript', 'Php', 'Web', empty × 4, 'Motion']

// kurslar = [1,2] // TypeError: Assignment to constant variable.

// Object ve Array non-primitive olduğu için const ile tanımlanmış olsa bile içindeki değerler değiştirilebilir fakat yeni atama yapılamaz.