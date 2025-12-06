import './styles.css'
import Gameboard from '../backend/Gameboard.js'
import Ship from '../backend/Ship.js'
import Player from '../backend/Player.js'
import RealPlayer from '../backend/RealPlayer.js'
import ComputerPlayer from '../backend/ComputerPlayer.js'
import GameManager from './GameManager.js'

const playerOne = new RealPlayer();
const playerTwo = new ComputerPlayer();

const playerOneBoard = document.getElementById('player-one-gameboard');
const playerTwoBoard = document.getElementById('player-two-gameboard');

const playerOneInventory = document.getElementById('player-one-inventory');
const playerTwoInventory = document.getElementById('player-two-inventory');

const game = new GameManager(
  playerOne,
  playerTwo,
  playerOneBoard, 
  playerTwoBoard,
  playerOneInventory,
  playerTwoInventory
);

game.renderBoards();
game.renderPlayerInventories();

playerOne.getBoard();

