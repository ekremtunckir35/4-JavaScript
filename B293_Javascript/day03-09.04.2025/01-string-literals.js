let sentence_with_double_quotes = "Ayşe İstanbul'da yaşıyor";
console.log(sentence_with_double_quotes);

let sentence_with_single_quotes = 'Ayşe "JavaScript" öğreniyor';
console.log(sentence_with_single_quotes);

let firstName = "Jane";
let lastName = "Doe";
let age = 30;
let salary= 30000;

console.log("Benim adım " + firstName + lastName + ". Yaşım " + age + ". Maaşım " + salary );

console.log(`Benim adım ${firstName} ${lastName}. Yaşım ${age}. Maaşım ${salary}`);

let sentence = `${firstName} İstanbul'da yaşıyor ve "JavaScript" öğreniyor.`;

console.log(sentence);


// Backtik birden fazla satırlı yazı tanımlamamıza izin verir.
let myString = `
    Herhangi
    bir
    cümle
    yazalım.
`;

console.log(myString);