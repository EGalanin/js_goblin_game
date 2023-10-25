import Board from './board';
import Goblin from './Goblin';
import GamePlay from './gameplay';

const board = new Board();
const char = new Goblin();
const gameplay = new GamePlay(board, char);

gameplay.init();
