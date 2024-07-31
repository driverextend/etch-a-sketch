const container = document.getElementById("container")
const button = document.querySelector("button")

let containerSize = parseInt(getComputedStyle(container).width)

function renderGridBySquaresPerSide(amount = 16){
    if (amount > 100) amount = 100

    clearGrid()
    
    for (let count = 1; count <= amount * amount; count++){
        const div = document.createElement('div')
    
        let sideLength = `${containerSize/amount}px` 
        div.style.width = sideLength
        div.style.height = sideLength
    
        div.addEventListener("mouseover", () => {
            div.classList.add("change-to-black")
        })
    
        container.appendChild(div)
    }
}

function clearGrid(){
    container.innerHTML = ""
}

button.addEventListener("click", () => {
    let userInput = parseInt(prompt(`new number of squares per side:\n(default value: 16)`))

    renderGridBySquaresPerSide(userInput)

    button.innerHTML = `number of squares per side: ${userInput} x ${userInput}`
})

renderGridBySquaresPerSide()

