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
		console.log("Congratulations, " + player.name + " has successfully escaped the maze!");
	}
	else if (player.posX === 3 && player.posY === 0 && player.hasKey != 1) {
		console.log(player.name + " needs a key to escape!");
	}
	else if (player.posX != 2 && player.posY != 1) {
		console.log(player.name + " keeps looking for an exit...");
	}
}

function checkEnemy() {
	if (player.posX === 2 && player.posY === 1) {
		player.posX = 0;
		player.posY = 1;
		console.log(player.name + " runs into a " + enemy.name + ". You stand no chance... You have to start over.");

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



// Refactored Code

// No need for "hp", "allegiance" properties.
function unit(name, posX, posY) {
	this.name = name;
	this.posX = posX;
	this.posY = posY;
}

var player = new unit("Frodo", 0, 1);
var enemy = new unit("Goblin", 2, 1);

var key = {posX:1, posY:2};

player.hasKey = 0;
// Can check directly against key posX and posY rather than 1 and 2.
// Type doesn't need to identical, thus == instead of ===.
function checkKey() {
	if (player.posX == key.posX && player.posY == key.posY) {
	player.hasKey = 1;
	};
	return player.hasKey;
}
// Function checkEnemy can removed and its code can be inserted directly into function checkObjective.
// player.posX and posY can be checked directly against enemy.posX and posY; no need to match type.
// Function checkObjective can be shortened (checkObj).
function checkObj() {
	if (player.posX == enemy.posX && player.posY == enemy.posY) {
	player.posX = 0;
	player.posY = 1;
// Instead of "You" and "goblin" can insert player.name and enemy.name so they could be easily customized later.
	console.log(player.name + " runs into a " + enemy.name + ". You stand no chance... You have to start over.");
	}
	
	else if (player.posX == 3 && player.posY == 0) {
		if (player.hasKey == 1) {
		console.log("Congratulations, " + player.name + " has successfully escaped the maze!");
		}
		else {
		console.log(player.name + " needs a key to escape!");
	}
	}
	else {
		console.log(player.name + " keeps looking for an exit...");
	}
}

// Combine 4 different "move" functions into one fucntion with a switch statement that will take
// direction of movement as an argument in form of a string.
player.move = function(direction) {
	switch (direction) {
		case "up":
			this.posY += 1
			break;
		case "down":
			this.posY -= 1
			break;
		case "right":
			this.posX += 1
			break;
		case "left":
			this.posX -= 1
			break;
	}
	checkKey();
	checkObj();
}

//Tests
player.move("right");
console.log(player.posX + " " + player.posY)
player.move("right");
console.log(player.posX + " " + player.posY)
// Should return to the original position
player.move("right");
console.log(player.posX + " " + player.posY)
player.move("up");
console.log(player.posX + " " + player.posY)
// Gets the key
player.move("down");
player.move("down");
player.move("right");
player.move("right");
// Finds and exit

// Reflection My initial reaction after reading through the instructions for this assignment was that this is going to
// be the most difficult task I had to face up to this point and I seriously doubted that I could even successfully
// complete it. But, as I slowly rolled into it, I realized that this is actually a lot of fun and it's possible to get
// creative here. The main reason for my worries was that my JS knowledge, including syntax, is not good enough yet to
// be writing seemingly such a complex code. Also, the fact that this was a solo assignment added the element of
// nervousness. Now that I'm finished with it though, I can say that it was very productive to finally write a more or
// less significant piece of code by myself. Of course, I would occasionally run into mistakes and errors here and
// there, but luckily, I was able to clarify what was wrong and fix it. I definitely learned a lot from this assignment
// and gained a valuable experience of coding, got my feet wet, so to speak. Also, once I again I realized that initial
// planning, pseudocode and refactoring are crucial elements of completing more or less complicated code challenge like
// this one. I will make sure to stick to this strategy in the future!
