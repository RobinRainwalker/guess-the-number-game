// console.log's are left as is but commented out
// so you get an idea of how I work
// the real comments I put a # before so they stand out
// there's an excess of console.logs still printed to make it more engaging



// console.log('test');


// #load variables
let number_of_guesses = 0;
let secret_number = null;

// console.log(secret_number + " control test")

function generate_secret_number() {
	secret_number =  Math.floor(Math.random() * (100 - 1)) + 1;
	//#uncomment this if you want the answer but wanna test anyways
	console.log(secret_number + " generated")
}
generate_secret_number()


// #say hello
// console.log("welcome to guess a number\n\rit's gonna be a fun time\n\r guessa number betwixt one and one hunnerd\n\ractual numbers please and thank you")
console.log("welcome to guess a number")
console.log("it's gonna be a fun time")
console.log("guess a number betwixt one and one hundred")
console.log("actual numbers please and thank you")

// #record player input
process.stdin.on('data', (test) => 
{
	let guessed_num = test.toString();
	// console.log(guessed_num)
	check_it_or_wreck_it(guessed_num)

});


// #game logic
function check_it_or_wreck_it(a) {
	
	let player_guess = parseInt(a, 10);
	// let data_type_check = typeof player_guess;
	// console.log(data_type_check)

	//#make sure they play by the rules
	if(isNaN(player_guess) || player_guess <= 0 || player_guess >= 100) {
		console.log('wtf. you ran this program')
		console.log('follow the instructions')
	}

	if (player_guess < secret_number) {
		console.log("haha nope. too low. try again")
	} else if (player_guess > secret_number) {
		console.log("haha nope. too high. try again")
	}

	// #win condition
	if(player_guess === secret_number) {
		console.log("omfg you wizard")
		console.log("the secret number was " + secret_number + " the whole time")
		console.log("#gottem")
		process.exit()
	} 

	number_of_guesses++
	console.log("guess #" + number_of_guesses)

	if(number_of_guesses > 5) {
		console.log("hahahahahaha a computer is beating you")
	}
	if(number_of_guesses > 7) {
		console.log("you took too long. im bored")
		process.exit()
	}

}


//there's always more to be added but here's core functionality+