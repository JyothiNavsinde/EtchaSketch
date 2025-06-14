const gridCont = document.querySelector(".gridContainer");

const btn = document.querySelector("#newGrid");

function createGrid(numSquares) {
    gridCont.innerHTML = ""; //to clear the contianer
    const sqaureSize = 1000/numSquares;
    
    for(let i=0; i<numSquares*numSquares; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "gridCell";
        gridDiv.style.width = `${sqaureSize}px`;
        gridDiv.style.height = `${sqaureSize}px`;

        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.backgroundColor = "purple";
        });

        gridCont.appendChild(gridDiv);

    }
}

createGrid(16);

btn.addEventListener("click", () => {
    let numSquares = prompt("How many squares per side?");

    createGrid(numSquares);
})


