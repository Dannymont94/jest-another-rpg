const Character = require('./Character');
const Potion = require('../lib/Potion');

class Player {
  constructor(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * (10 + 1)) + 95; // random number between 95 and 105
    this.strength = Math.floor(Math.random() * (5 + 1)) + 7; // random number between 7 and 12
    this.agility = Math.floor(Math.random() * (5 + 1)) + 7; // random number between 7 and 12

    this.inventory = [new Potion('health'), new Potion()];
  }
  
  // returns an object with various player properties
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }
  
  // returns the inventory array or false if empty
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }
  
  addPotion(potion) {
    this.inventory.push(potion);
  }
  
  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];
    
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  }
}
        
module.exports = Player;