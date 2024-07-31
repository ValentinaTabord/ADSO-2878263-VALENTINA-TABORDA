const cells = document.querySelectorAll(".cell");
let boardGame = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "";
let isGameOver = false;

// Función para iniciar el juego
function startGame() {
  currentPlayer = prompt("Elige tu opción (X o O):").toUpperCase();

  if (currentPlayer !== "X" && currentPlayer !== "O") {
    alert("Opción inválida, por favor elige X o O");
    startGame();
  }

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => makeMove(cell, index));
  });
}

// Función para realizar un movimiento
function makeMove(cell, index) {
  if (isGameOver || cell.textContent !== "") return;

  cell.textContent = currentPlayer;
  boardGame[index] = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Función para verificar si hay un ganador
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombinations.forEach((combination) => {
    const [a, b, c] = combination;
    if (
      boardGame[a] &&
      boardGame[a] === boardGame[b] &&
      boardGame[a] === boardGame[c]
    ) {
      isGameOver = true;
      alert(`${boardGame[a]} es el ganador!`);
    }
  });

  if (!boardGame.includes("") && !isGameOver) {
    isGameOver = true;
    alert("Empate!");
  }
}

// Iniciar el juego al cargar la página
window.onload = startGame;

// Añadir evento al botón de reinicio
resetButton.addEventListener('click', resetGame)
