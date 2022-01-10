var randomGuess = Math.floor (Math.random()*100 +1 );

let message0 = document.getElementById ("message0")
let message1 = document.getElementById ("message1");
let message2 = document.getElementById ("message2");
let message3 = document.getElementById ("message3");
let tries = 10;
var numberOfGuesses = 0;
var guessNumbers = [];
var button = document.getElementById("my_btn")
let container = document.querySelector('.container')

function play () {
		let user_guess = document.getElementById ("guess").value ; 
		if (user_guess < 1 || user_guess > 100 ){  
    		alert("Please Enter a number Between 1 to 100");  
   		}  
   		else{  	
    		guessNumbers.push(user_guess); 
     		numberOfGuesses+= 1;
     		tries -= 1 ; 
     	if (user_guess == randomGuess && numberOfGuesses <= 3) {
     		message1.textContent = "Woah, you're a genius, congratulations you have won!";
     		message2.textContent = "The number was " + randomGuess ;
     		message3.textContent = "You've got it in " + numberOfGuesses + " guesses";
     	}
     	else if (user_guess == randomGuess) {
     		message1.textContent = "Congratulations you have won!";
     		message2.textContent = "The number was " + randomGuess ;
     		message3.textContent = "You've got it in " + numberOfGuesses + " guesses";
     	}
     	if (user_guess > randomGuess) {
     		message0.textContent = `You only have ${tries} more tries `
     		message1.textContent = "Too high, try with something lower";
     		message2.textContent = "Number off guesses " + numberOfGuesses;
     		message3.textContent = "Guessed number is " + guessNumbers;
     	}
     	else if (user_guess < randomGuess) {
     		message0.textContent = `You only have ${tries} more tries `
     		message1.textContent = "Too low, try with something higher";
     		message2.textContent = "Number off guesses " + numberOfGuesses;
     		message3.textContent = "Guessed number is " + guessNumbers;
     	}
     	if (numberOfGuesses >= 10 ) {
     		message0.textContent = "GAME OVER"
     		button.disabled = true
     		document.getElementById("message0").style.color = "red";
     		alert ("Game Over, Please restart the game.")
     	}
    }
}

container.addEventListener('mousemove', changeColor)

function changeColor(e){
	document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},50)`
}