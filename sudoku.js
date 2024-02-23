/**
 * @param {list_list_int32} board
 * @return {list_list_int32}
 */
function solve_sudoku_puzzle(board) {
  let helper = (board) => {
    let row = 0;
    let col = 0;
    let cell = false;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[row].length; j++) {
        if (board[i][j] === 0) {
          cell = true;
          row = i;
          col = j;
          break;
        }
      }

      if (cell) break;
    }

    if (!cell) return true;

    for (let num = 1; num <= board.length; num++) {
      if (solve(num, row, col)) {
        board[row][col] = num;

        if (helper(board)) return true;
        board[row][col] = 0;
      }
    }
  };

  let solve = (num, row, col) => {
    if (board[row][col] !== 0) return;

    //check row
    for (let i = 0; i < board[row].length; i++) {
      if (board[row][i] === num) return false;
    }

    // check column
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === num) return false;
    }

    // check grid/3
    let gridRow = row - (row % 3);
    let gridCol = col - (col % 3);

    for (let i = gridRow; i < gridRow + 3; i++) {
      for (let j = gridCol; j < gridCol + 3; j++) {
        if (board[i][j] === num) return false;
      }
    }

    return true;
  };

  helper(board);
  return board;
}

let board = [
  [8, 4, 9, 0, 0, 3, 5, 7, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 0, 9, 0, 0, 8, 3],
  [0, 0, 0, 9, 4, 6, 7, 0, 0],
  [0, 8, 0, 0, 5, 0, 0, 4, 0],
  [0, 0, 6, 8, 7, 2, 0, 0, 0],
  [5, 7, 0, 0, 1, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 2, 1, 7, 0, 0, 8, 6, 5],
];

let sudoku = solve_sudoku_puzzle(board);
console.log(sudoku);
