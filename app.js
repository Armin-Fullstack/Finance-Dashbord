const number1 = document.querySelector(".number1")

let counter = 0;

setInterval(() => {
    if(counter === 65){
        clearInterval
    } else {
        counter += 1
        number1.innerHTML = `${counter}%`
    }

} , 30)