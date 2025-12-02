import Globals from '../backend/Globals.js';

const Board = (() => {
  let board = document.getElementById('gameboard');

  function renderBoard() {
    for (let r = 0; r < Globals.BOARD_HEIGHT; r++) {
      let row = document.createElement('div');
      row.classList.add('board-row')
      for (let c = 0; c < Globals.BOARD_WIDTH; c++) {
        let cell = document.createElement('div');
        cell.classList.add('board-cell');
        row.appendChild(cell);
        console.log('appending cell');
      }
      board.appendChild(row);
      console.log('appending row');
    }
  }

  return {
    renderBoard
  };
})();

export default Board;
