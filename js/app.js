// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -1;
    this.y = Math.floor((Math.random() * 3))+0.5;
    this.speed = Math.random()*2 +1;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 5) {
        this.x += dt* this.speed;
        this.y = this.y ;
    } else {
        this.x = -1;
        this.y = Math.floor((Math.random() * 3))+0.5;
        this.speed = Math.random()*2 +1;
    }
    if (player.x == Math.floor(this.x+0.5) && player.y== this.y){
        player.x = Math.floor((Math.random() * 5));
        player.y = 5-0.5;;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x *101, this.y *83);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = Math.floor((Math.random() * 5));
    this.y = 5-0.5;
    this.speed = 1;
}

Player.prototype.update = function(dt) {
    this.x = this.x ;
    this.y = this.y ;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x *101, this.y *83);
};

Player.prototype.handleInput = function(command) {
    if (command === 'left') {
        this.x -= 1;
        if (this.x === -1) {
        this.x = 0;
        }
    } else if (command === 'up') {
        this.y -= 1;
        if (this.y === -0.5) {
        this.y = 5-0.5;
        }
    } else if (command === 'right') {
        this.x += 1;
        if (this.x === 5) {
        this.x = 4;
        }
    } else if (command === 'down') {
        this.y += 1;
        if (this.y === 5.5) {
        this.y = 5-0.5;
        }
    };


};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var e1 = new Enemy();
var e2 = new Enemy();
var e3 = new Enemy();
allEnemies.push(e1);
allEnemies.push(e2);
allEnemies.push(e3);


var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
