// const prompt = require("prompt-sync")();

/* let numbersList = Array.from(numbersHTML); or
let numbersList = [...numbersHTML]; or 
let numbersList = [];
for (let i = 0; i < 10; i++) {
numbersList.push(numbersHTML[i])
} */

let numbersHTML = document.getElementsByClassName("numbers");
let numbersList = [...numbersHTML];
let numbersData = numbersList.map((e) => e.textContent);

let reset = document.querySelector(".reset");

let showCal = document.querySelector(".show");

numbersList.forEach((element) => {
	element.addEventListener("click", () => {
		showCal.textContent = element.textContent;
		reset.textContent = "C";
	});
});

reset.addEventListener("click", () => {
	if (reset.textContent === "C") {
		reset.textContent = "AC";
		showCal.textContent = 0;
	}
})

function calculator() {
	let count = 0;
	let firstInput;
	while (true) {
		if (count === 0) {
			firstInput = Number(prompt("angka pertama: "));
			while (isNaN(firstInput)) {
				console.log("Please, enter a valid number");
				firstInput = Number(prompt("angka pertama: "));
			}
		}
		let userOperator = prompt("masukkan operatormu: ");

		if (userOperator === "=") {
			console.log(firstInput);
			break;
		}

		let secondInput = Number(prompt("angka kedua: "));
		while (isNaN(secondInput)) {
			console.log("Please enter a valid number");
			secondInput = Number(prompt("angka kedua"));
		}

		if (userOperator === "+") {
			firstInput += secondInput;
			console.log("angka pertama:", firstInput);
		} else if (userOperator == "-") {
			firstInput -= secondInput;
			console.log("angka pertama:", firstInput);
		} else if (userOperator == "*") {
			firstInput *= secondInput;
			console.log("angka pertama:", firstInput);
			console.log(typeof firstInput);
		} else if (userOperator == "/") {
			firstInput /= secondInput;
			console.log("angka pertama:", firstInput);
		} else {
			console.log("Not an operator!");
			continue;
		}
		count++;
		console.log(count);
	}
}

// calculator();
