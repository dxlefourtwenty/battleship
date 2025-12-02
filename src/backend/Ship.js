export default class Ship {
  #type;
  #length;
  #health;
  #hasSunk;
  #isVertical;
  #stringRep;
  #player;

  constructor(type) {
    this.#type = type;
    this.assignStats();
    this.#hasSunk = false;
    this.#isVertical = false;
  }

  assignStats() {
    if (this.#type === 'aircraft-carrier') {
      this.#health = 5;
      this.#length = 5;
      this.#stringRep = 'A';
    } else if (this.#type === 'destroyer') {
      this.#health = 2;
      this.#length = 2;
      this.#stringRep = 'D';
    } else if (this.#type === 'cruiser') {
      this.#health = 3;
      this.#length = 3;
      this.#stringRep = 'W';
    } else if (this.#type === 'submarine') {
      this.#length = 3;
      this.#health = 3;
      this.#stringRep = 'S';
    } else if (this.#type === 'battleship') {
      this.#length = 4;
      this.#health = 4;
      this.#stringRep = 'B';
    } else {
      this.#health = 2;
      this.#length = 2;
      this.#stringRep = 'D';
    }
  }

  hit() {
    this.#health--;
    this.isSunk();
  }

  isSunk() {
    if (this.#health <= 0) {
      this.#hasSunk = true;
    }
  }

  getType() {
    return this.#type;
  }

  getSunk() {
    return this.#hasSunk;
  }

  getHealth() {
    return this.#health;
  }

  getLength() {
    return this.#length;
  }

  getStringRep() {
    return this.#stringRep;
  }

  togglePlacement() {
    this.#isVertical = !this.#isVertical;
  }

  getVertical() {
    return this.#isVertical;
  }

  getPlayer() {
    return this.#player;
  }
}