// DOM Elements
const getEl = document.getElementById("get");
const setEl = document.getElementById("set");
const removeEl = document.getElementById("remove");
const clearEl = document.getElementById("clear");

// Global Variables
const AUTH_SECRET = "MB39kYHqa2xsYhxktPXX2Rmc0oQnKfJAqHtvBUgSkjc=";

// Event
getEl.addEventListener("click", () => {
    const classified = localStorage.getItem("classified");
    console.log(classified); // yoksa null döner
})

setEl.addEventListener("click", () => {
    localStorage.setItem("classified", AUTH_SECRET);
    localStorage.setItem("not-classified", "Pizza severim.");
    localStorage.setItem("another-classified", AUTH_SECRET);
})

removeEl.addEventListener("click", () => {
    localStorage.removeItem("another-classified");
})

clearEl.addEventListener("click", () => {
  localStorage.clear();
});

// localStorage yerine sessionStorage kullanmak istiyorsanız aynı metodlar geçerlidir sadece sessionStorage. ile yazmanız gerekir.

// sessionStorage.setItem("anohter", "123")