const decrementBtn = document.querySelector(".decrease")
const incrementBtn = document.querySelector(".increase")
const resetBtn = document.querySelector(".reset")
const counterValue = document.querySelector(".counter__value")
const buttons = document.querySelectorAll(".btn")
let count = Number(counterValue.textContent)


//* first approach

// incrementBtn.addEventListener("click", () => {
//     count++
//     counterValue.textContent = count 
// })

// decrementBtn.addEventListener("click", () => {
//     count--
//     counterValue.textContent = count 
//     count.style.color = "red"
// })

// resetBtn.addEventListener("click", () => {
//     count = 0
//     counterValue.textContent = count 
// })



//* second approach

// function counter(e) {
//     const classList = e.target.classList;
//     console.log(classList);
    
//     if(classList.contains("increase")) count++
//     else if(classList.contains("decrease")) count--
//     else count = 0
//     counterValue.textContent = count
// }

// incrementBtn.addEventListener("click", counter)
// decrementBtn.addEventListener("click", counter)
// resetBtn.addEventListener("click", counter)



// * third approach

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const classList = btn.classList
    if(classList.contains("increase")) count++
    else if(classList.contains("decrease")) count--
    else count = 0

    if(count > 0) {
        counterValue.classList.add("green")
        counterValue.classList.remove("red")
    }
    else {
        counterValue.classList.add("red")
        counterValue.classList.remove("green")
    }
    
    counterValue.textContent = count
    })
})