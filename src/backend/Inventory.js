import Ship from './Ship.js';
import Globals from './Globals.js';

export default class Inventory {
  #carriers;
  #battleships;
  #cruisers;
  #submarines;
  #destroyers;
  #inventory;

  constructor() {
    this.#carriers = [];
    this.#battleships =  [];
    this.#cruisers = [];
    this.#submarines = [];
    this.#destroyers = [];
    this.#populateShipSlots();

    this.#inventory = [];
    this.#populateInventory();
  }

  getCarrierCount() {
    return this.#carriers.length;
  }

  getBattleshipCount() {
    return this.#battleships.length;
  }

  getCruiserCount() {
    return this.#cruisers.length;
  }

  getSubmarineCount() {
    return this.#submarines.length;
  }

  getDestroyerCount() {
    return this.#destroyers.length;
  }

  #populateShipSlots() {
    for (let i = 0 ; i < Globals.CARRIER_COUNT; i++) {
      this.#carriers.push(new Ship('aircraft-carrier'));
    }

    for (let i = 0 ; i < Globals.BATTLESHIP_COUNT; i++) {
      this.#carriers.push(new Ship('battleship'));
    }

    for (let i = 0 ; i < Globals.CRUISER_COUNT; i++) {
      this.#carriers.push(new Ship('cruiser'));
    }

    for (let i = 0 ; i < Globals.SUBMARINE_COUNT; i++) {
      this.#carriers.push(new Ship('submarine'));
    }

    for (let i = 0 ; i < Globals.DESTROYER_COUNT; i++) {
      this.#carriers.push(new Ship('destroyer'));
    }
  }

  #populateInventory() {
    this.#inventory.push(
      this.#carriers,
      this.#battleships,
      this.#cruisers,
      this.#submarines,
      this.#destroyers
    )
  }

  getInventory() {
    return this.#inventory;
  }
}