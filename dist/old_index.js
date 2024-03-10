"use strict";
//# sourceMappingURL=index.js.map
class Player {
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    console.log("In Constructor");
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) throw new Error("Score must be positive");
    this.#score = newScore;
  }
  taunt() {
    console.log("Booyah!");
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
}

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1.last);

const player2 = new Player("charlie", "brown");
player2.taunt();
console.log(player2.first);
