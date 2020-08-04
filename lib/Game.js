const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function() {
  this.enemies.push(new Enemy('goblin', 'sword'));
  this.enemies.push(new Enemy('orc', 'baseball bat'));
  this.enemies.push(new Enemy('skeleton', 'axe'));
  this.currentEnemy = this.enemies[0];
  
  inquirer
    .prompt({
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    })
    .then(({ name }) => {
      this.player = new Player(name);

      this.startNewBattle();
    })
};

Game.prototype.startNewBattle = function() {
  if (this.player.agility > this.currentEnemy.agility) {
    this.isPlayerTurn = true;
  } else {
    this.isPlayerTurn = false;
  }

  console.log('Your stats are as follows:');
  console.table(this.player.getStats());
  console.log(this.currentEnemy.getDescription());

  this.battle();
};

Game.prototype.battle = function() {
  // if isPlayerTurn:
  if (this.isPlayerTurn) {
    // prompt user to attack or use a potion
    inquirer
      .prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Attack', 'Use Potion']
      })
      .then(({ action }) => {
        // if using a potion:
        if (action === 'Use Potion') {
          // display list of potion objects to user
          if (!this.player.getInventory()) {
            console.log('You don\'t have any potions!');
            return;
          }

          inquirer
            .prompt({
              type: 'list',
              message: 'Which potion would you like to choose?',
              name: 'action',
              choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
            })
            .then(({ action }) => {
              const potionDetails = action.split(': ');

              this.player.usePotion(potionDetails[0] - 1);
              console.log(`You used a ${potionDetails[1]} potion!`)
            });
          // apply selected potion effect to player
        // if attacking:
        } else {
          // subtract health from the enemy based on player attack value
          const damage = this.player.getAttackValue();
          this.currentEnemy.reduceHealth(damage);

          console.log(`You attacked the ${this.currentEnemy.name}!`);
          console.log(this.currentEnemy.getHealth());
        }
      });
  // if enemy turn:
  } else {
    // subtract health from the player based on enemy attack value
    const damage = this.currentEnemy.getAttackValue();
    this.player.reduceHealth(damage);

    console.log(`You were attacked by the ${this.currentEnemy.name}!`);
    console.log(this.player.getHealth());
  }
};

module.exports = Game;