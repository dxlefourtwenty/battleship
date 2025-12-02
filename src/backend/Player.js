import Gameboard from './Gameboard.js';
import Inventory from './Inventory.js';

export default class Player {
  #gameboard
  #missedAttacks;
  #successfulHits;
  #inventory;

  constructor() {
    this.#gameboard = new Gameboard();
    this.#inventory = new Inventory();
    this.#missedAttacks = 0;
    this.#successfulHits = 0;
  }
}