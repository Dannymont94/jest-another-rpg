function Character() {}

Character.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Character.prototype.getHealth = function() {
  return `${this.name}'s health is now ${this.health}!`;
};

Character.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min + 1) + min);
};

Character.prototype.reduceHealth = function(damage) {
  this.health -= damage;

  if (this.health < 0) {
    this.health = 0;
  }
};

module.exports = Character;