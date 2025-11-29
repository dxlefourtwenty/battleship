import { Gameboard } from './Gameboard.js';

export default class Player {
  #gameboard
  #missedAttacks;
  #successfulHits;

  constructor() {
    this.#gameboard = new Gameboard();
    this.#missedAttacks = 0;
    this.#successfulHits = 0;
  }
}