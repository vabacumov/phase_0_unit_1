// I worked on this challenge [by myself, with:]
By myself
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // Rescue Mission
 // Move down x2
 // Move right
 // Move up x2
 // Move right x2
 // Move down
 // ATTACK!
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab The Mushroom
// Move up
// Move right
// Move left
// Move up
// ATTACK!
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Drink Me
// ATTACK!
// Move right
// Move down
// Move up
// Move right
// ATTACK!
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt The Guards
// Move right
// Bust the door
// Move right
// Lure the guard
// Move left x2
// Tell Phoebe to attack
// Move right
// Tell Phoebe to follow
// Move right x2
// Move up
// Move right
// Say something to get the guards' attention
// Move down
// Move right
// Move up
// Move right
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Let's get out of here!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's A Trap
// Move down x2
// Lure the ogre
// Move up x2
// Tell units to attack
this.moveDown();
this.moveDown();
this.say("Hey There!");
this.moveUp();
this.moveUp();
this.say("Attack!");

// Break The Prison
// Ask each prisoner for name
// If the name matches the name of an enemy, return false
// Otherwise, break the door
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "MARCUS")
    return false;
return true;

// Taunt
// Say something to Ogre x4
this.say("Hey!");
this.say("Get over here!");
this.say("Come on you wuss!");
this.say("Ha-ha!");

// Cowardly Taunt
// Move close enough to the ogres
// Say something to lure the ogres
// Move back to the safe spot
this.moveXY(50, 16);
this.say("I can lure them in here.");
this.moveXY(70, 10);

// Commanding Followers
// Approach the friendly units
// Greet them
// Tell them to follow
// Move close enough to the enemy
// Tell friendly units to attack the enemy
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow me!");
this.moveXY(63, 40);
this.say("attack!");

// Mobile Artillery
// Move within the range
// Shoot the enemies
// Move within the range
// Shoot the enemies x2
// Move within the range
// Shoot the enemies x2
this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(43, 40);
this.attackXY(50, 65);
this.attackXY(45, 50);
this.moveXY(47, 41);
this.attackXY(70, 55);
this.attackXY(57, 44);


 
 
 
 
 
// Release 3:
* In JavaScript the keyword "this" refers to the object that is at hand
or the object that the method is called upon.
* The "()" or parentheses in JavaScript is where the arguments of a
function or method have to be put in.
* Semicolons are used to separate code blocks into many executable 
statements in JavaScript.

// Reflection: // Write your reflection here. This is a challenge with very
clear instructions (which was really nice). I did not face any particular
problems while completing this assignment besides having to rewrite the code
when it wouldn't get me through to the next level. I also did not have to use
any additional resources because the website explained what needs to be done very well.
I now understand a little more about pseudocode after working on this challenge. Also, 
I solidified my knowledge of "this" keyword and what it's used for. Overall, I can say 
that I felt really confident going through this challenge and it was also quite a lot of 
fun! There were a couple of tedious parts, for example, having to find the right X,Y 
coordinates for the Mobile Artillery mission or writing multiple repetitive lines of 
pseudocode, but it the end, it was worth it.
