const container = document.getElementById("container")
const button = document.querySelector("button")

let containerSize = parseInt(getComputedStyle(container).width)
let currentOpacity = 0

function renderGridBySquaresPerSide(amount = 16){
    clearGrid()
    
    for (let count = 1; count <= amount * amount; count++){
        const div = document.createElement('div')
    
        let sideLength = `${containerSize/amount}px` 
        div.style.width = sideLength
        div.style.height = sideLength
    
        div.addEventListener("mouseover", () => {
            // div.classList.add("change-to-black")
            div.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${currentOpacity})`
            currentOpacity >= 1 ? currentOpacity = 0: currentOpacity += .1
            console.log(currentOpacity)

        })
    
        container.appendChild(div)
    }
}

function clearGrid(){
    container.innerHTML = ""
}

button.addEventListener("click", () => {
    let userInput = parseInt(prompt(`new number of squares per side:\n(default value: 16)`))
   
    if (userInput > 100) userInput = 100
    if (!Number.isInteger(userInput)) userInput = 16

    renderGridBySquaresPerSide(userInput)

    button.innerHTML = `number of squares per side: ${userInput} x ${userInput}`
})

renderGridBySquaresPerSide()

