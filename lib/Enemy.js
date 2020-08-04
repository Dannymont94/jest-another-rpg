const Potion = require('./Potion');

function Enemy(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();

  this.health = Math.floor(Math.random() * (10 + 1) + 85);
  this.strength = Math.floor(Math.random() * (5 + 1) + 5);
  this.agility = Math.floor(Math.random() * (5 + 1) + 5);
}

Enemy.prototype.getHealth = function() {
  return `The ${this.name}'s health is now ${this.health}!`;
};

Enemy.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Enemy.prototype.reduceHealth = function(damage) {
  this.health -= damage;

  if (this.health < 0) {
    this.health = 0;
  }
};

Enemy.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min + 1) + min);
};

Enemy.prototype.getDescription = function() {
  return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;