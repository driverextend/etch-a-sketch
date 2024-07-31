const container = document.getElementById("container")

let sideLength = parseInt(getComputedStyle(container).width)

function calculateWidthAndHeight(amount = 16){
    return `${sideLength / amount}px`
}

for (let count = 1; count <= 256; count++){
    const div = document.createElement('div')

    div.style.width = calculateWidthAndHeight()
    div.style.height = calculateWidthAndHeight()

    div.addEventListener("mouseover", () => {
        div.classList.add("change-to-black")
    })


    container.appendChild(div)

}

