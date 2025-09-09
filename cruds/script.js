let title = document.getElementsByClassName("title")[0];
let price = document.getElementsByClassName("price")[0];
let taxes = document.getElementsByClassName("taxes")[0];
let ads = document.getElementsByClassName("ads")[0];
let discount = document.getElementsByClassName("discount")[0];
let total = document.getElementsByClassName("total")[0];
let count = document.getElementsByClassName("count")[0];
let category = document.getElementsByClassName("category")[0];
let submit = document.getElementsByClassName("submit")[0];


function getTotal() {
    if (price.value != "") {
        total.innerHTML =   (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.style.background = "#040";
    }
    else
    {
        total.innerHTML = 0;
        total.style.background = "#a00";
    }
}