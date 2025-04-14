function showNum(){

    let num = document.querySelector("input").value;

    // if(num < 0 || num > 100){
    //     alert("Lütfen 0'dan 100'e kadar bir sayı giriniz...");
    //     document.querySelector("p").innerText = "";
    // } else{
    //     document.querySelector("p").innerText = num;
    // }

    (num < 0 || num > 100) && alert("Lütfen 0'dan 100'e kadar bir sayı giriniz..."); // if block
    (num < 0 || num > 100) || (document.querySelector("p").innerText = num); // else block


}