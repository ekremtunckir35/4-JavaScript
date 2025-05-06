// === ASYNC VS SYNC ===

// Kodların Uygulanma Sırası

// Sync: Her işlem kendisinden önceki işlemin bitmesini bekler. Bu sıra katı bir şekilde uygulanır.
// function syncFunction(){

//     console.log("Task 1");
//     console.log("Task 2");
//     console.log("Task 3");

// }

// syncFunction();

// Async: İşlemler arka planda paralel olarak yürütülür. Bu sıralama katı değildir.
// function asyncFunction() {
//   console.log("Task 1");

//   setTimeout(() => {
//     console.log("Task 2");
//   }, 20);

//   console.log("Task 3");

//   setTimeout(() => {
//     console.log("Task 4");
//   }, 10);
// }

// asyncFunction();

// JavaScript'in uygulama sırası öncelikle sync sonra async olarak devam eder.


// Blocklanma

// Sync: İşlem bitene kadar thread ilgili işlemle ilginecek ve bu da programı blocklayacaktır.

// console.log("Task 1");
// for(let i = 0; i < 10000000000; i++){

// }

// console.log("Task 2");

// Async: Bloklanma söz konusu olmaz.
setTimeout(() => {
    console.log("Task 1");
}, 1000)

setTimeout(() => {
  console.log("Task 2");
}, 1000);

setTimeout(() => {
  console.log("Task 3");
}, 1000);