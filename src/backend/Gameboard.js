import Globals from './Globals.js';
import Ship from './Ship.js';

export default class Gameboard {
  #board;
  #shipMap;

  constructor() {
    this.#board = this.fillBoard();
    this.#shipMap = this.fillShipMap();
  }

  fillBoard() {
    let board = [];
    
    for (let r = 0; r < Globals.BOARD_HEIGHT; r++) {
      board[r] = [];
      for (let c = 0; c < Globals.BOARD_WIDTH; c++) {
        board[r][c] = '.';
      }
    }

    return board;
  }

  fillShipMap() {
    let map = [];
    
    for (let r = 0; r < Globals.BOARD_HEIGHT; r++) {
      map[r] = [];
      for (let c = 0; c < Globals.BOARD_WIDTH; c++) {
        map[r][c] = null;
      }
    }

    return map;
  }

  getBoard() {
    return this.#board;
  }

  placeShip(posY, posX, ship) {
    if (posY < 0 || posY >= Globals.BOARD_HEIGHT ||
        posX < 0 || posX >= Globals.BOARD_WIDTH) {
      throw new Error('Invalid board position');
    }

    this.#board[posY][posX] = ship.getStringRep();
    this.#shipMap[posY][posX] = ship;

    this.renderShip(posY, posX, ship);
  }
  
  renderShip(posY, posX, ship) {
    const L = ship.getLength();
    const rep = ship.getStringRep();
    const vertical = ship.getVertical();
    
    let halfLeft = Math.floor((L - 1) / 2);
    let halfRight = Math.ceil((L - 1) / 2);

    let leftoverForRight = 0;
    let leftoverForLeft = 0;

    if (vertical) {
      // upward
      for (let i = 1; i <= halfRight; i++) {
        const y = posY + i;
        if (y >= 0 && y < Globals.BOARD_HEIGHT) {
          this.#board[y][posX] = rep;
          this.#shipMap[y][posX] = ship;
        } else {
          leftoverForLeft++;
        }
      }

      // add if any to halfLeft
      halfLeft += leftoverForLeft;
      // downward
      for (let i = 1; i <= halfLeft; i++) {
        const y = posY - i;
        if (y >= 0 && y < Globals.BOARD_HEIGHT) {
          this.#board[y][posX] = rep;
          this.#shipMap[y][posX] = ship;
        } else {
          leftoverForRight++;
        }
      }

      if (leftoverForRight === 0) return;
      
      // add if any to halfRight
      for (let i = halfRight; i <= leftoverForRight + halfRight; i++) {
        const y = posY + i;
        if (y >= 0 && y < Globals.BOARD_HEIGHT) {
          this.#board[y][posX] = rep;
          this.#shipMap[y][posX] = ship;
        }
      }
  
    } else {
      // right
      for (let i = 1; i <= halfRight; i++) {
        const x = posX + i;
        if (x >= 0 && x < Globals.BOARD_WIDTH) {
          this.#board[posY][x] = rep;
          this.#shipMap[posY][x] = ship;
        } else {
          leftoverForLeft++;
        }
      }

      // add if any to halfLeft
      halfLeft += leftoverForLeft;
      // left
      for (let i = 1; i <= halfLeft; i++) {
        const x = posX - i;
        if (x >= 0 && x < Globals.BOARD_WIDTH) {
          this.#board[posY][x] = rep;
          this.#shipMap[posY][x] = ship;
        } else {
          leftoverForRight++;
        }
      }

      if (leftoverForRight === 0) return;

      // add if any to halfRight
      for (let i = halfRight; i <= leftoverForRight + halfRight; i++) {
        const x = posX + i;
        if (x >= 0 && x < Globals.BOARD_WIDTH) {
          this.#board[posY][x] = rep;
          this.#shipMap[posY][x] = ship;
        }
      }
    }

  }

  receiveAttack(posY, posX) {
    const ship = this.#shipMap[posY][posX];

    if (ship === null) {
      this.#board[posY][posX] = 'O';
      return false;
    }

    if (this.#board[posY][posX] === 'H') {
      return false;
    }

    ship.hit();
    this.#board[posY][posX] = 'H';
    
    return true;
  }

  allShipsSunk() {
    for (let r = 0; r < this.#board.length; r++) {
      for (let c = 0; c < this.#board[r].length; c++) {
        if (this.#board[r][c] !== '.' &&
          this.#board[r][c] !== 'O' &&
          this.#board[r][c] !== 'H'
        ) return false;
      }
    }

    return true;
  }

  printBoard() {
    this.#board.forEach(row => {
      console.log(row.join(' '));
    })
  }

  debugShipMap() {
    for (let y = 0; y < Globals.BOARD_HEIGHT; y++) {
      let row = '';
      for (let x = 0; x < Globals.BOARD_WIDTH; x++) {
        const ship = this.#shipMap[y][x];
        row += ship ? ship.getStringRep() + ' ' : '. ';
      }
      console.log(row);
    }
  }
}