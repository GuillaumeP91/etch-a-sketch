const screen = document.querySelector(".sketch-screen");
const clearBtn = document.querySelector("#clear-btn");

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

function makeGrids(size) {
    screen.innerHTML = '';
    
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.addEventListener("mouseover", function() {
                row.style.backgroundColor = getRandomColor(); 
            });
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

makeGrids(16);

clearBtn.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (e.g., 64 for a 64x64 grid):");
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        makeGrids(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});