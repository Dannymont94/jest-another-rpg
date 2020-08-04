class Potion {
  constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * (10 + 1)) + 30; // random number between 30 and 40
    } else {
      this.value = Math.floor(Math.random() * (5 + 1)) + 7; // random number between 7 and 12
    }
  }
}

module.exports = Potion;