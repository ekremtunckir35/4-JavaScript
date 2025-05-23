// === DOM ===
const selectEl = document.querySelector("#carList");
const carValueEl = document.querySelector("#carValue");

// === Data ===
const car = {
    brand: "Audi",
    model: "A4",
    color: "Kırmızı",
    year: 2024,
    price: 35000,
    doors: 4,
    fuel: "dizel",
    seats: 5
};

// === Event ===
selectEl.addEventListener("change", (event) => {
    // console.log(event.target.value);
    const selectedKey = event.target.value;

    console.log(car?.[selectedKey]);
    carValueEl.innerText = car?.[selectedKey];
    
});


// === Function ===
function populateSelectElement(){

    // Array içerisinde tüm özellikleri alma:
    const keys = Object.keys(car);

    // console.log(keys[0]);
    // console.log(keys[1]);
    // console.log(keys[2]);
    // console.log(keys[3]);
    // console.log(keys[4]);

    // Object'in özelliklerini tek tek döndürüp option elementleri oluşturmak:
    for(let index = 0; index < keys.length; index++){
        const key = keys[index];

        selectEl.innerHTML += `
        <option value=${key} > ${key} </option>
        `;
    }

}

populateSelectElement();