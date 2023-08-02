var fries = document.getElementById("Add");
var burger = document.getElementById("Sub");
var pizza = document.getElementById("Mult");
var icecream = document.getElementById("Divide");
var printResult = document.getElementById("amt");
var su = 0;
function addfries() {
    su = 150 + su;
}
fries.addEventListener("click", addfries);
function addburger() {
    su = 250 + su;
}
fries.addEventListener("click", addburger);
function addpizza() {
    su = 350 + su;
}
fries.addEventListener("click", addpizza);
function addicecream() {
    su = 100 + su;
}
fries.addEventListener("click", addicecream);
