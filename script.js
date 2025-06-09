const gridCont = document.querySelector(".gridContainer");
for(let i=0; i<16; i++) {
    for(let j=0; j<16; j++) {
        const divCell = document.createElement("div");
        divCell.classList.add("gridCell");
        gridCont.appendChild(divCell);
    }
}