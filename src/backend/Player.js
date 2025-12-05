import Gameboard from './Gameboard.js';
import Inventory from './Inventory.js';
import Globals from './Globals.js';

export default class Player {
  #gameboard
  #missedAttacks;
  #successfulHits;
  #inventory;

  #carrierCount;
  #destroyerCount;
  #cruiserCount;
  #submarineCount;
  #battleshipCount;

  constructor() {
    this.#gameboard = new Gameboard();
    this.#inventory = new Inventory();
    this.#missedAttacks = 0;
    this.#successfulHits = 0;
    this.#carrierCount = Globals.CARRIER_COUNT;
    this.#battleshipCount = Globals.BATTLESHIP_COUNT;
    this.#cruiserCount = Globals.CRUISER_COUNT;
    this.#submarineCount = Globals.SUBMARINE_COUNT;
    this.#destroyerCount = Globals.DESTROYER_COUNT;
  }
}