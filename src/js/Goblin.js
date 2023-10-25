import goblinImg from '../img/goblin.png';

export default class Goblin {
  constructor() {
    this.char = undefined;
  }

  creatChar() {
    const char = document.createElement('img');
    char.classList.add('goblin');
    char.src = goblinImg;
    this.char = char;
  }

  getChar() {
    this.creatChar();
    return this.char;
  }
}
