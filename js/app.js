// Enemy class
var Enemy = function() {

    this.x = -50 * (Math.floor(Math.random() * 35) + 1);
    this.y = 60 + (Math.floor(Math.random() * 3) * 80);

    this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
 
    // sets enemy speed
    this.x += 450 * dt;

    // Resets Enemy position
    if( this.x >= 505) {
        this.x = -50 * (Math.floor(Math.random() * 35) + 1);
        this.y = 60 + (Math.floor(Math.random() * 3) * 80);
    };

    // Causes player to reset position if collides with enemy
    if(player.y == this.y ) {
        if(player.x >= (this.x - 15) &&  player.x <= (this.x + 15)) {
            playerReset();
        }
    };




};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player Class
var Player = function() {
    this.x = 200;
    this.y = 380;

    this.sprite = 'images/char-boy.png';

};

// Resets Player/Enemies if Player wins
Player.prototype.update = function() {

   if(this.y === -20) {
        playerReset();

        allEnemies = [];
        spawnEnemies(6);
   }




};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Moves player
Player.prototype.handleInput = function(move) {
    if(move === "up" && this.y > -20) {
        this.y -= 80;
    } else if(move === "down" && this.y < 380) {
        this.y += 80;
    } else if(move === "left" && this.x > 0) {
        this.x -= 100;
    } else if(move === "right" && this.x < 400) {
        this.x += 100;
    }



};

//Function set Players position 
function playerReset() {
    player.x = 200;
    player.y = 380;
}


// Function to add enimies to allEnemies array 
function spawnEnemies(num) {
    var i = 0;
    while(i <= num) {
        allEnemies.push(new Enemy);
        i++;
    }
};


// Array to store enemies
var allEnemies = [];
// Adds enimies to allEnemies array
spawnEnemies(6);
//Player object
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
