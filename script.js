const container = document.getElementById("container")

for (let count = 1; count <= 256; count++){
    const div = document.createElement('div')
    div.innerText = "I'm a div"

    div.style.width = "6.25vw"
    div.style.height = "6.25vh"
    div.style.border = "2px solid black"

    container.appendChild(div)


}