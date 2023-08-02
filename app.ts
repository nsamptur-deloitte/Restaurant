const fries = document.getElementById("Add") as HTMLButtonElement
const burger = document.getElementById("Sub") as HTMLButtonElement
const pizza = document.getElementById("Mult") as HTMLButtonElement
const icecream = document.getElementById("Divide") as HTMLButtonElement
const printResult = document.getElementById("amt") as HTMLOutputElement
var su:number=0
function addfries() { 
    su=150+su; 
    printResult.textContent=amt.toString()

} 
fries.addEventListener("click", addfries)
function addburger() { 
    su=250+su; 
} 
fries.addEventListener("click", addburger)
function addpizza() { 
    su=350+su; 
} 
fries.addEventListener("click", addpizza)
function addicecream() { 
    su=100+su; 
} 
fries.addEventListener("click", addicecream)
