import Globals from '../backend/Globals.js';
import Gameboard from '../backend/Gameboard.js';

export default class GameManager {
  #playerOne;
  #playerTwo;

  #playerOneBoard;
  #playerTwoBoard;

  #playerOneInventory;
  #playerTwoInventory;

  constructor(
    player1, 
    player2, 
    boardContainer1, 
    boardContainer2,
    inventoryContainer1,
    inventoryContainer2
  ) {
    this.#playerOne = player1;
    this.#playerTwo = player2;
    this.#playerOneBoard = boardContainer1;
    this.#playerTwoBoard = boardContainer2;
    this.#playerOneInventory = inventoryContainer1;
    this.#playerTwoInventory = inventoryContainer2;
  }
  
  renderBoards() {
    const board1 = this.#playerOne.getBoard();
    const board2 = this.#playerTwo.getBoard();

    board1.forEach((row) => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('board-row');

      row.forEach((cell) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('board-cell');
        cellDiv.textContent = cell;

        rowDiv.appendChild(cellDiv);
      });

      this.#playerOneBoard.appendChild(rowDiv);
    });

    board2.forEach((row) => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('board-row');

      row.forEach((cell) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('board-cell');
        cellDiv.textContent = cell;

        rowDiv.appendChild(cellDiv);
      });

      this.#playerTwoBoard.appendChild(rowDiv);
    });
  }
  
  renderPlayerInventories() {
    const inventory1 = this.#playerOne.getInventory();
    const inventory2 = this.#playerTwo.getInventory();

    inventory1.forEach(shipArray => {
      shipArray.forEach(ship => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('player-ship-cell');
        cellDiv.textContent = ship.getStringRep();
  
        this.#playerOneInventory.appendChild(cellDiv);
      })
    });

    inventory2.forEach(shipArray => {
      shipArray.forEach(ship => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('player-ship-cell');
        cellDiv.textContent = ship.getStringRep();
  
        this.#playerTwoInventory.appendChild(cellDiv);
      })
    });
  }

  updateBoard() {

  }

  updatePlayerInventories() {

  }
};

