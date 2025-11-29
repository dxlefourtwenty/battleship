import { Player } from './Player.js';

export default class RealPlayer extends Player {
  #name;

  constructor(name) {
    super();
    this.#name = name;
  }
}