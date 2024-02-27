let b = (function gameboard() {
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const winsDiagonally = (board) => {
    console.log("diagonally function:", board);
    if (
      board[0][0] == board[1][1] &&
      board[1][1] == board[2][2] &&
      board[0][0] == board[2][2] &&
      board[0][0] != 0
    ) {
      alert(board[0][0] + " wins!");
      if (board[0][0] == 1) {
        return "X";
      } else if (board[0][0] == 2) {
        return "O";
      }
    } else if (
      board[2][0] == board[1][1] &&
      board[1][1] == board[0][2] &&
      board[2][0] == board[0][2] &&
      board[2][0] != 0
    ) {
      alert(board[2][0] + " wins!");
      if (board[2][0] == 1) {
        return "X";
      } else if (board[2][0] == 2) {
        return "O";
      }
    }
    return "";
  };
  return {
    board,
    winsDiagonally,
  };
})();

const game = document.querySelector(".board");
const turn = document.querySelector(".turn");
turn.textContent = "X's turn.";

let turnIndicator = "X";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let piece = document.createElement("div");
    piece.style.width = "100px";
    piece.style.height = "100px";
    piece.style.border = "1px solid black";
    piece.style.display = "flex";
    piece.style.alignItems = "center";
    piece.style.justifyContent = "center";
    piece.style.fontSize = "25px";
    piece.addEventListener("click", function () {
      if (turnIndicator === "X") {
        if (b.board[i][j] == 0) {
          b.board[i][j] = 1;
          console.log(b.board);
          piece.textContent = "X";
          turn.textContent = "O's turn.";
          turnIndicator = "O";
        } else {
          alert("This position is taken! Choose a different one.");
        }
      } else if (turnIndicator === "O") {
        if (b.board[i][j] == 0) {
          b.board[i][j] = 2;
          console.log(b.board);
          piece.textContent = "O";
          turn.textContent = "X's turn.";
          turnIndicator = "X";
        } else {
          alert("This position is taken! Choose a different one.");
        }
      }
      winningPlayer = b.winsDiagonally(b.board);
      console.log(winningPlayer + " wins! The board will now clear.");
    });
    game.appendChild(piece);
  }
}
