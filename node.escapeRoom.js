var readlineSync = require("readline-sync");
var playerName = readlineSync.question("What is your name? ");

//Display a welcome message
var introMessage = `${playerName}, Welcome to the Escape Room Simulation!`;
console.log(introMessage);

//Boolean Flags
var hasLife = true;
var hasKey = false;

while (hasLife == true){
    var menuOptions = readlineSync.keyIn("Enter 1 to put hand in hole, \n Enter 2 to find the key, or Enter 3 to Open the door", {limit: "$<1-3>"});
    if (menuOptions == 1){
        //Player put hand in the hole
        //Player is dead
        //Game is over
        console.log("Oh no! You put your hand in the hole. You are DEAD. Game is OVER!");
        hasLife = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        //Player selected option 2 for the first time and has NOT found the key earlier
        console.log("Congratulations, you have found the key successfully! Please proceed to the next menu option!");
        hasKey = true;
    }
    else if (menuOptions == 2 && hasKey == true){
        //Player selected option 2 again and has ALREADY found the key earlier.
        console.log("You have already found the key. Please stop wasting your time and proceed to the next menuy option!");
        //hasKey = true;
    }
    else if (menuOptions == 3 && hasKey == false){
        //Player selected option 3 and has NOT found the key yet
        console.log*("You need to identify the key first if you want to open the exit door!");
    }
    else if (menuOptions == 3 && hasKey == true){
        //Player selected option 3 and has ALREADY found the key
        //End the game successfully
        //Player won the game
        console.log("Great Job! You have found the key and opened the exit door successfully!;");
        console.log("Congratulations! You won!");
        hasLife = false
    }
}
