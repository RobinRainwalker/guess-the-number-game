// console.log("test")

//#setup
let floor = 1;
let ceiling = 101;
let still_playing = true;

let comp_guess = 50;

instructions()
pick_num()
console.log("my first guess is: " + comp_guess)

function game() {
// while (game === true) {
//
// }


	process.stdin.on('data', (test) => {
		console.log("is ur number: " + comp_guess )

		let answer = test.toString().trim();

		// console.log(save + "game")
		parse_user_input(answer)
	});

};
game()


function parse_user_input(text) {
	if (isNaN(text) === false) {
		console.log("that is a number m8, play by the rules pls")
	} else if (text === "H" || text === "h") {
		ceiling = comp_guess
		pick_num()
		console.log(comp_guess + "comp_guess\n\rnew ceiling " + ceiling)
	} else if (text === "L" || text === "l") {
		// console.log("uh oh, dats too low")
		floor = comp_guess
		pick_num()
		console.log(comp_guess + "comp_guess\n\rnew floor " + floor)
	} else if (text === "Y" || text === "y") {
		console.log("I won. cause I'm a perfect, sexy program")
		process.exit()
	} else {
		// console.log("wtf. the instructions were clear")
		console.log("are you sure you can read? here, let's try again")
	}
}

function instructions() {
	console.log("welcome to the game")
	console.log("H, L, Y")
}

function pick_num() {
	let new_guess = (ceiling - floor) / 2
	comp_guess = Math.round(new_guess)
 // console.log("pick_num  " + comp_guess)
}

// function amirite() {
// 	console.log("is your number " + comp_guess)
// }
