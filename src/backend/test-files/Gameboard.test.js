import Globals from '../Globals.js';
import Gameboard from '../Gameboard.js';
import Ship from '../Ship.js';

test('Creating a 10x10 grid', () => {
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  expect(board).toHaveLength(10);

  board.forEach(row => {
    expect(row).toHaveLength(10);
  });
});

test(`Array is filled with '.'`, () => {
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();

  for (let c = 0; c < Globals.BOARD_WIDTH; c++) {
    for (let r = 0; r < Globals.BOARD_HEIGHT; r++) {
      expect(board[c][r]).toBe('.');
    }
  }
});

test('Placing a ship', () => {
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  const destroyer = new Ship('destroyer');

  gameboard.placeShip(7, 6, destroyer);

  expect(board[7][6]).toBe('D');
});

test('Rendering a ship length 3, vertical false', () => {
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  const destroyer = new Ship('destroyer');

  gameboard.placeShip(7, 6, destroyer);

  expect(board[7][5]).toBe('D');
  expect(board[7][6]).toBe('D');
  expect(board[7][7]).toBe('D');
})

test('Rendering a ship length 3, vertical true', () => {
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  const destroyer = new Ship('destroyer');

  destroyer.togglePlacement();
  gameboard.placeShip(7, 6, destroyer);

  expect(board[6][6]).toBe('D');
  expect(board[7][6]).toBe('D');
  expect(board[8][6]).toBe('D');
});

test('Out of bounds correction test 1, \
  Ship length 5 and vertical false', () => {
  
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  const ship = new Ship('carrier');

  gameboard.placeShip(8, 8, ship);

  expect(board[8][8]).toBe('C');
  expect(board[8][9]).toBe('C');
  expect(board[8][7]).toBe('C');
  expect(board[8][6]).toBe('C');
  expect(board[8][5]).toBe('C');
});

test('Out of bounds correction test 2, \
  Ship length 5 and vertical true', () => {
  
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  const ship = new Ship('destroyer');

  ship.togglePlacement();
  gameboard.placeShip(0, 0, ship);

  expect(board[0][0]).toBe('D');
  expect(board[1][0]).toBe('D');
  expect(board[2][0]).toBe('D');
  expect(board[3][0]).toBe('D');
});

test('Receive attack test 1', () => {
  const gameboard = new Gameboard();
  const ship = new Ship('carrier');

  gameboard.placeShip(0, 0, ship);

  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(gameboard.receiveAttack(0, 0)).toBe(false);
  expect(gameboard.receiveAttack(1, 0)).toBe(false);
  expect(ship.getHealth()).toBe(4);
});

test('Check if all ships have sunk', () => {
  const gameboard = new Gameboard();

  expect(gameboard.allShipsSunk()).toBe(true);
  const ship = new Ship('watchboat');

  gameboard.placeShip(0, 0, ship);
  expect(gameboard.allShipsSunk()).toBe(false);

  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(gameboard.receiveAttack(0, 1)).toBe(true);
  expect(gameboard.receiveAttack(0, 2)).toBe(true);

  expect(gameboard.allShipsSunk()).toBe(true);
});