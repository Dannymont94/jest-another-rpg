class Character{
  constructor(name = '') {
    this.name = name;
    this.health = Math.floor(Math.random() * (10 + 1)) + 95; // random number between 95 and 105
    this.strength = Math.floor(Math.random() * (5 + 1)) + 7; // random number between 7 and 12
    this.agility = Math.floor(Math.random() * (5 + 1)) + 7; // random number between 7 and 12
  }
  
  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  }
  
  getHealth() {
    return `${this.name}'s health is now ${this.health}!`;
  }
  
  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;
    
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  reduceHealth(damage) {
    this.health -= damage;
    
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

module.exports = Character;