// board
var plateau = ["", "", "", "", "", "", "", "", ""];
var joueur = "❌";
var gameOver = false;

// winning combinations
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// click on a cell
function play(index) {

    if (plateau[index] != "" || gameOver == true) {
        return;
    }

    plateau[index] = joueur;
    document.getElementById("c" + index).innerHTML = joueur;

    if (checkWin() == true) {
        document.getElementById("status").innerHTML =
            "Le joueur " + joueur + " gagne 🎉";
        gameOver = true;
        return;
    }

    if (isDraw() == true) {
        document.getElementById("status").innerHTML = "Match nul 🤝";
        gameOver = true;
        return;
    }

    if (joueur == "❌") {
        joueur = "⭕";
    } else {
        joueur = "❌";
    }

    document.getElementById("status").innerHTML =
        "Player " + joueur + " turn";
}

// check win (very simple)
function checkWin() {
    var i = 0;
    while (i < winningCombinations.length) {
        var a = winningCombinations[i][0];
        var b = winningCombinations[i][1];
        var c = winningCombinations[i][2];

        if (plateau[a] != "" &&
            plateau[a] == plateau[b] &&
            plateau[b] == plateau[c]) {
            return true;
        }
        i++;
    }
    return false;
}

// check draw
function isDraw() {
    var i = 0;
    while (i < 9) {
        if (plateau[i] == "") {  //the game can still continue.
            return false;
        }
        i++;
    }
    return true;
}

// restart game
function restartGame() {
    plateau = ["", "", "", "", "", "", "", "", ""];
    joueur = "❌";
    gameOver = false;

    var i = 0;
    while (i < 9) {
        document.getElementById("c" + i).innerHTML = "";
        i++;
    }

    document.getElementById("status").innerHTML =
        "Player ❌ turn";
}
