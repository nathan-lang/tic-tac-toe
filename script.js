let b = (function gameboard() {
  let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const winsDiagonally = (board) => {
    if (
      board[0][0] == board[1][1] &&
      board[1][1] == board[2][2] &&
      board[0][0] == board[2][2] &&
      board[0][0] != 0
    ) {
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
      if (board[2][0] == 1) {
        return "X";
      } else if (board[2][0] == 2) {
        return "O";
      }
    }
    return "";
  };

  const winsHorizontally = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i].every((val) => val == board[i][0] && val != 0)) {
        if (board[i][0] == 1) {
          return "X";
        } else if (board[i][0] == 2) {
          return "O";
        }
      }
    }
    return "";
  };

  const winsVertically = (board) => {
    for (let i = 0; i < board.length; i++) {
      colHasSameNumbers = true;
      for (let j = 0; j < board[i].length; j++) {
        if (board[j][i] != board[0][i]) {
          colHasSameNumbers = false;
        }
      }
      if (colHasSameNumbers) {
        if (board[0][i] == 1) {
          return "X";
        } else if (board[0][i] == 2) {
          return "O";
        }
      }
    }
    return "";
  };

  return {
    board,
    winsDiagonally,
    winsHorizontally,
    winsVertically,
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
          piece.textContent = "X";
          turn.textContent = "O's turn.";
          turnIndicator = "O";
        } else {
          alert("This position is taken! Choose a different one.");
        }
      } else if (turnIndicator === "O") {
        if (b.board[i][j] == 0) {
          b.board[i][j] = 2;
          piece.textContent = "O";
          turn.textContent = "X's turn.";
          turnIndicator = "X";
        } else {
          alert("This position is taken! Choose a different one.");
        }
      }
      diagonalWin = b.winsDiagonally(b.board);
      horizontalWin = b.winsHorizontally(b.board);
      verticalWin = b.winsVertically(b.board);
      if (diagonalWin.length != 0) {
        alert(
          diagonalWin + " won diagonally! Game over. The board will now clear."
        );
        location.reload();
      } else if (horizontalWin.length != 0) {
        alert(
          horizontalWin +
            " won horizontally! Game over. The board will now clear."
        );
        location.reload();
      } else if (verticalWin.length != 0) {
        alert(
          verticalWin + " won vertically! Game over. The board will now clear."
        );
        location.reload();
      }
    });
    game.appendChild(piece);
  }
}
