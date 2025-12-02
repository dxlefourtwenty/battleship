import Ship from './Ship.js';

export default class Inventory {
  #carriers;
  #battleships;
  #cruisers;
  #submarines;
  #destroyers;

  constructor() {
    this.#carriers = 1;
    this.#battleships = 1;
    this.#cruisers = 2;
    this.#submarines = 1;
    this.#destroyers = 1;
  }

  getCarriers() {
    return this.#carriers;
  }

  getBattleships() {
    return this.#battleships;
  }

  getCruisers() {
    return this.#cruisers;
  }

  getSubmarines() {
    return this.#submarines;
  }

  getDestroyers() {
    return this.#destroyers;
  }

  decrementShipCount(stringRep) {
    if (stringRep === 'A') this.#carriers--;
    else if (stringRep === 'B') this.#battleships--;
    else if (stringRep === 'C') this.#cruisers--;
    else if (stringRep === 'S') this.#submarines--;
    else if (stringRep === 'D') this.#destroyers--;
  }
}