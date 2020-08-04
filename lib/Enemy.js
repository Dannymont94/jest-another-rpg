const Character = require('./Character');
const Potion = require('./Potion');

class Enemy {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * (10 + 1) + 85);
    this.strength = Math.floor(Math.random() * (5 + 1) + 5);
    this.agility = Math.floor(Math.random() * (5 + 1) + 5);
  }
        
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

module.exports = Enemy;