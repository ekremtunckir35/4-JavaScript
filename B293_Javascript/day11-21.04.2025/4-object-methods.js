// Örnek yapı
// Object'in özellik ve değerlerinin tek tek alınıp döndürülmesine yarayan yapı:
for(const [key, value] of Object.entries(car)){
  console.log(`Key: ${key} - Value: ${value}`);


const firstName = "Ali";
const lastName = "Gel";

const firstName1 = "Veli";
const lastName1 = "Git";

let car = {
    brand: "Mercedes",
    model: "S500",
    color: "siyah",
    gear: "Otomatik Vites",
    engine: {
        type: "Dizel",
        size: 6,
        age: 2024
    },
    firstHand: true,
    start: () => {
        console.log("Araba çalıştırıldı.");
        return "Araba çalıştırıldıktan sonra dönecek değer.";
    }
}

// Object'e ve değerlerine erişim:
console.log(car);
console.log(typeof car); // object
console.log(car.brand); // Mercedes
console.log(car.engine.age); // 2024
console.log(car.start);
car.start(); // Araba çalıştırıldı.
console.log(car.start());

// Object'e property ekleme:
car.oil = "Super";
console.log(car);

// Object değerini güncelleme
car.firstHand = false;
console.log(car);

// Tüm objenin üzerine yazar:
car = {
    isSold: false
}
console.log(car); // {isSold: false}


let car1 = {
  brand: "Mercedes",
  model: "S500",
  color: "siyah",
  gear: "Otomatik Vites",
  engine: {
    type: "Dizel",
    size: 6,
    age: 2024,
  },
  firstHand: true,
  start: () => {
    console.log("Araba çalıştırıldı.");
    return "Araba çalıştırıldıktan sonra dönecek değer.";
  },
};

console.log(car1.brand); // Mercedes
console.log(car1["brand"]); // // Mercedes
console.log(car1["engine"]["type"]); // Dizel
console.log(car1?.["1"]?.["1"]); // undefined