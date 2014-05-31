// This is a solo challenge

// Your mission description:
//
// Maze
// The primary objective of the mission is to get out of the maze. 
// The secondary objectives are:
// 1) To grab the key in order to be able to exit the maze;
// 2) To avoid running into an enemy. 
// The player can move up, down, left or right. 


// Pseudocode
 
//Create "unit" object constructor.
// Include properties "name", "hp", "allegiance", "posX", "posY".
// Use the "unit" constructor to create objects "player" and "enemy".
// Give object "player" methods "moveUp", "moveDown", "moveLeft", "moveRight".
// Create object "key" with properties "posX", "posY".
// Give "player" property "hasKey".
// Create a function inside the called "checkKey".
// Create a function inside the called "checkObjective".

// Initial Code

function unit(name, hp, allegiance, posX, posY) {
	this.name = name;
	this.hp = hp;
	this.allegiance = allegiance;
	this.posX = posX;
	this.posY = posY;
}

var player = new unit("Frodo", 15, "Light", 0, 1);
var enemy = new unit("Goblin", 50, "Dark", 2, 1);

var key = {posX:1, posY:2};

player.hasKey = 0;

function checkKey() {
	if (player.posX === 1 && player.posY === 2) {
	player.hasKey = 1;
	};
	return player.hasKey;
}

function checkObjective() {
	if (player.posX === 3 && player.posY === 0 && player.hasKey === 1) {
		console.log("Congratulations, you have successfully escaped the maze!");
	}
	else if (player.posX === 3 && player.posY === 0 && player.hasKey != 1) {
		console.log("You need a key to escape!");
	}
	else if (player.posX != 2 && player.posY != 1) {
		console.log("Keep looking for an exit...");
	}
}

function checkEnemy() {
	if (player.posX === 2 && player.posY === 1) {
		player.posX = 0;
		player.posY = 1;
		console.log("You run into a goblin. You stand no chance... You have to start over.");

	}
}

player.moveUp = function() {
	this.posY += 1;
	checkEnemy();
	checkKey();
	checkObjective();
	return this.posY;
}
player.moveDown = function() {
	this.posY -= 1;
	checkEnemy();
	checkKey();
	checkObjective();
	return this.posY;
}
player.moveLeft = function() {
	this.posX -= 1;
	checkEnemy();
	checkKey();
	checkObjective();
	return this.posX;
}
player.moveRight = function() {
	this.posX += 1;
	checkEnemy();
	checkKey();
	checkObjective();
	return this.posX;
}






/* Tests
player.moveRight();
player.moveRight();
console.log(player.posX);

player.moveRight();
player.moveUp();

player.moveDown();
player.moveDown();
player.moveRight();
player.moveRight(); */

// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 