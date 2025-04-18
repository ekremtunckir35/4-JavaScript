// ============ DOM Elementleri ============
const inputEl = document.querySelector("#input");
const startBtnEl = document.querySelector("#start");
const guessBtnEl = document.querySelector("#guess");
const resultEl = document.querySelector("#result");

// ============ Değişken / Sabit ============
let randomNumber = 0;
const minRange = 1;
const maxRange = 100;
const totalShots = 10;
let remainingShots = totalShots;

// ============ Functions / Events ============
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(Math.random()); // [0, 1)
function start() {
  // Rastgele numara atamak:
  randomNumber = generateRandomNumber(minRange, maxRange);
  inputEl.value = ""; // inputEl içerisini boşaltır.
  inputEl.focus(); // elemente focus (odaklanmasını) sağlar.
  guessBtnEl.classList.remove("d-none");
  startBtnEl.innerText = "Tekrar oyna";
  resultEl.innerText = "";
}

function guess() {
  const guessNumber = +inputEl.value;

  // Validasyon
  if (
    !guessNumber ||
    isNaN(guessNumber) ||
    guessNumber < minRange ||
    guessNumber > maxRange
  ) {
    resultEl.innerText = `Lütfen ${minRange} ile ${maxRange} arasında bir sayı giriniz.`;
    resultEl.classList.add("alert", "alert-danger");
    return;
  }

  console.log(randomNumber);

  if (guessNumber === randomNumber) {
    resultEl.innerText = "🏆🏆🏆 Kazandınız!!! 🏆🏆🏆";
    resultEl.classList.remove("alert", "alert-danger");
    resultEl.classList.add("alert", "alert-success");
    reset();
  } else if (guessNumber > randomNumber) {
    resultEl.innerText = "⏬ Daha düşük bir sayı dene ⏬";
    resultEl.classList.remove("alert", "alert-danger");
    resultEl.classList.add("alert", "alert-warning");
    remainingShots--;
  } else {
    resultEl.innerText = "⏫ Daha yüksek bir sayı dene ⏫";
    resultEl.classList.remove("alert", "alert-danger");
    resultEl.classList.add("alert", "alert-warning");
    remainingShots--;
  }

  if(remainingShots === 0){
    resultEl.innerText = "Tüm haklarını kullandın. Tekrar oynamak ister misin?";
    reset();
  }

  inputEl.focus();
  inputEl.value = "";
}

function reset(){
    guessBtnEl.classList.add("d-none");
    startBtnEl.innerText = "Oyunu Başlat";
    remainingShots = totalShots;
}