// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Derek Johnson
//  2.Vladislav Abacumov


// 0. "YOU SIGNED... WHO?!"
var client1 = {
	name: "William Shatner",
	age: 83,
	quote: "KHAAAAAAAAN!!",
	showQuote: function(){
		console.log(this.quote);
	}

};

var client2 = {
	name: "Patrick Stewart",
	age: 73,
	quote: "Make it so."
};


// 1. "Here they Come!"
var clients = [];

clients.push(client1);
clients.push(client2);


var client3 = {name:"Adam Sandler", age:47, quote:"That's your home! Are you too good for your home?!"};
clients.push(client3);
var client4 = {name:"Kristen Bell", age:33, quote:"Do you wanna build a snowman?"};
clients.push(client4);
var client5 = {name:"Jim Carrey", age:52, quote:"...So you're telling me there's a chance? YEAH!"};
clients.push(client5);

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

function display() {
    for (i = 0; i < clients.length; i++) {
        console.log("Our actor is " + clients[i].name + ", age " + clients[i].age + ". Quote: '" + clients[i].quote + "'.");
    }
}

display();


// 4. "But wait, there's more!"

client1.showQuote();

// 5.  ** BONUS **


//  6.  Your Reflection:
/* This was undoubtedly the most challenging assignment that I had to face so far. Despite the fact 
that I had an opportunity to work on it with a partner, both of us had really hard time completing 
all of the releases. It felt like we were really close but couldn't quite get it! Our strategy was mostly 
trying different solutions out and periodically testing them in Node. Our biggest problem was lack of proper 
syntax knowledge; if we had a little more experience writing JS code, I'm sure we would have been able to get 
the assignment done much faster. However, on a positive note, we learned a whole lot of new concepts thanks to 
this challenge. Even though, we had to schedule another peer-pairing session in order to be able to finish it 
up, it was definitely worth it! Overall, I can say that enjoyed digging through this assignment. In the future, 
I hope that having more knowledge and experience under my belt will give me more confidence, thus allowing me to 
complete the tasks more effectively and faster.