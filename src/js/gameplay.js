export default class GamePlay {
  constructor(board, char) {
    this.board = board;
    this.boardSize = 4;
    this.char = char;
    this.activeChar = null;
    this.timerId = null;
    this.hit_count = 0;
    this.miss_count = 0;
    this.hit = this.hit.bind(this);
  }

  init() {
    this.readrowBoard();

    this.start();
  }

  readrowBoard() {
    const board = this.board.getBoard(this.boardSize);
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = '<h1 class=\'title\'>Goblin Battle</h1>';
    container.appendChild(board);
    body.insertBefore(container, body.firstChild);
    this.cells = [...board.children];
  }

  generateposition() {
    const position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.position) {
      this.generateposition();
      return;
    }
    this.deletedChar();
    this.position = position;
    this.adventChar();
  }

  deletedChar() {
    if (this.activeChar === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
    this.miss_count += 1;
    document.querySelector('.miss').textContent = `Промахов ${this.miss_count}`;
    if (this.miss_count >= 5) {
      this.activeChar = null;
      this.hit_count = 0;
      this.miss_count = 0;
      document.querySelector('.miss').textContent = `Промахов ${this.miss_count}`;
      this.position = null;
      clearInterval(this.timerId);
      alert('Вы проиграли!');
      this.start();
    }
  }

  hit() {
    this.hit_count += 1;
    document.querySelector('.hit').textContent = `Попаданий ${this.hit_count}`;
    if (this.activeChar === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
    this.activeChar = null;
  }

  adventChar() {
    this.activeChar = this.char.getChar();
    this.activeChar.onclick = this.hit;
    this.cells[this.position].appendChild(this.activeChar);
  }

  start() {
    this.timerId = setInterval(() => {
      this.generateposition();
    }, 1000);
  }
}
