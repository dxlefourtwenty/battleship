// import "./styles.css";
import Gameboard from "../backend/Gameboard.js";
import Ship from "../backend/Ship.js";

console.log("Webpack success!");
const board = new Gameboard();
const ship = new Ship('carrier');
// ship.togglePlacement();
console.log(`Ship is vertical: ${ship.getVertical()}`);
console.log(`Ship length is: ${ship.getLength()}`);
board.placeShip(0, 0, ship);
board.printBoard();
console.log('');
board.debugShipMap();

console.log('');
console.log('attacking ship...');
console.log('');
console.log(`first attack returns: ${board.receiveAttack(0, 0)}`);
console.log(`second attack returns: ${board.receiveAttack(0, 0)}`);
console.log(`third attack returns: ${board.receiveAttack(1, 0)}`);
board.printBoard();
console.log('');
board.debugShipMap();
console.log(`current ship health: ${ship.getHealth()}`);

