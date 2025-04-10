// DOM Element
const h1El = document.querySelector("h1");
let pStyles = document.querySelector("p").classList;

// DOM Manipülasyon
console.log(h1El.classList);
h1El.classList.add("blue");

pStyles.remove("blue");
pStyles.add("green");

pStyles.remove("green");
pStyles.add("red");