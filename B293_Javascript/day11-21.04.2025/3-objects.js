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