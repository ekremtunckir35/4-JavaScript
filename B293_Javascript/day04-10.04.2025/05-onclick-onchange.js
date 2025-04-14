// DOM Element
const pEl = document.querySelector("#welcome");

function sayHello(){
    console.log("Button tıklandı. sayHello fonksiyonu çalıştırılıyor.");
    alert("Hello World");
}

function myFunction(){
    console.log("Onchange çalıştırıldı.");
    let fullName = document.querySelector("#fullName").value;
    pEl.innerText = `Merhaba ${fullName}`;
}