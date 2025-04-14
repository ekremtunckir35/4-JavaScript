let h2Elements = document.querySelectorAll("h2");
console.log(h2Elements);

h2Elements[0].innerText = "Bu başlık <strong class='text-danger'> innerText </strong> ile oluşturulmuştur.";
console.log(h2Elements[0].innerText);

h2Elements[1].innerHTML = "Bu başlık <strong class='text-danger'> innerHTML </strong> ile oluşturulmuştur."
console.log(h2Elements[1]);

let para1El = document.querySelector("#para1");
let firstName = "John";
// para1El.innerText = `Merhaba ${firstName}`;

document.querySelector("#para1").innerHTML = `Merhaba ${firstName}`;