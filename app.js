const number1 = document.querySelector(".number1")
const number2 = document.querySelector(".number2")
const menuBtn = document.getElementById("menu-btn")
const menuMobile = document.getElementById("menu-mobile")

let counter1 = 0;

setInterval(() => {
    if(counter1 === 65){
        clearInterval
    } else {
        counter1 += 1
        number1.innerHTML = `${counter1}%`
    }

} , 30)

let counter2 = 0
setInterval(() => {
    if(counter2 === 48){
        clearInterval
    } else {
        counter2 += 1
        number2.innerHTML = `${counter2}%`
    }

} , 35)


const showMenu = () => {
    menuBtn.classList.toggle("open")
    menuMobile.classList.toggle("block")
    menuMobile.classList.toggle("hidden")
}

menuBtn.addEventListener("click" , showMenu)