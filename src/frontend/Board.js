import Globals from '../backend/Globals.js';

const Board = (() => {
  let board = document.getElementById('gameboard');
  let playerInventories = document.querySelectorAll('.player-ships');

  function renderBoard() {
    for (let r = 0; r < Globals.BOARD_HEIGHT; r++) {
      let row = document.createElement('div');
      row.classList.add('board-row');

      for (let c = 0; c < Globals.BOARD_WIDTH; c++) {
        let cell = document.createElement('div');
        cell.classList.add('board-cell');
        row.appendChild(cell);
      }

      board.appendChild(row);
    }
  }

  function renderBoardElements() {

  }

  function renderPlayerInventories() {
    playerInventories.forEach((inventory) => {
      for (let i = 0; i < 4; i++) {
        let cell = document.createElement('div');
        cell.classList.add('player-ship-cell');
        inventory.appendChild(cell);
      }
    });
  }

  function updateBoard() {

  }

  function updatePlayerInventories() {

  }

  return {
    renderBoard,
    renderBoardElements,
    updateBoard,
    renderPlayerInventories,
    updatePlayerInventories,
  };
})();

export default Board;
