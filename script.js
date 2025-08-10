const container = document.querySelector(".drawing-board");
var boardWidth = 16
function drawBoard(size, screen) {
    screen.innerHTML = ""; // clear existing grid
    let squareSize = (screen.offsetWidth) / size - 1;
    for (i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.cssText = "display: flex;";

        for (j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.className = "pixel";
            square.style.cssText = `border: 1px solid #a6aba6; background: #cdd1cd; width: ${squareSize}px; height: ${squareSize}px;`;
            row.appendChild(square);
        }
        screen.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector(".screen");
    drawBoard(boardWidth, screen);

    screen.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("pixel")) {
      e.target.style.backgroundColor = "#2c2e2c";
    }
    });

    const clear = document.getElementById("clear")
    clear.addEventListener("click", () => {
        drawBoard(boardWidth, screen)
    });

    const dimensions = document.getElementById("dimensions")
    dimensions.addEventListener("click", () => {
        let newDimensions = parseInt(prompt("Enter new Dimensions"));
        if (newDimensions > 0 && newDimensions < 100) {
            boardWidth = newDimensions
            console.log("valid")
            drawBoard(boardWidth, screen)
            console.log("s")
        }
        else {
            alert("Must be a number between 1 and 100")
            console.log("range")
        }
    });
});

