let plateau = Array(9).fill("");
let joueur = "❌";
let gameOver = false;

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.dataset.index;

        if (plateau[index] !== "" || gameOver) return;

        plateau[index] = joueur;
        cell.textContent = joueur;

        if (checkWin()) {
            statusText.textContent = `Le joueur ${joueur} gagne 🎉`;
            gameOver = true;
            return;
        }

        if (plateau.every(cell => cell !== "")) {
            statusText.textContent = "Match nul 🤝";
            gameOver = true;
            return;
        }

        joueur = joueur === "❌" ? "⭕" : "❌";
        statusText.textContent = `Player ${joueur} turn`;
    });
});

function checkWin() {
    return winningCombinations.some(combination =>
        combination.every(index => plateau[index] === joueur)
    );
}

function restartGame() {
    plateau = Array(9).fill("");
    joueur = "❌";
    gameOver = false;
    statusText.textContent = "Player ❌ turn";

    cells.forEach(cell => {
        cell.textContent = "";
    });
}
