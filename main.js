// const prompt = require("prompt-sync")();

/* let numbersList = Array.from(numbersHTML); or
let numbersList = [...numbersHTML]; or 
let numbersList = [];
for (let i = 0; i < 10; i++) {
numbersList.push(numbersHTML[i])
} */

// Get Element From DOM
let numbersHTML = document.getElementsByClassName("numbers");
let numbersList = [...numbersHTML];
let numbersData = numbersList.map((e) => e.textContent);

let operators = [...document.querySelectorAll(".operators")];
console.log(operators);

let reset = document.querySelector(".reset");
let showCal = document.querySelector(".show");

let result = document.querySelector(".result");

// Variables
let count = 0;
let firstInput = null;
let secondInput = null;
let userOperator = null;

// Event Listener
numbersList.forEach((element) => {
	element.addEventListener("click", () => {
		reset.textContent = "C";

		if (count == 0) {
			firstInput = String(element.textContent);
			showCal.textContent = String(element.textContent);
			console.log(firstInput);
			count = 1;
		} else if (count == 1) {
			firstInput += String(element.textContent);
			showCal.textContent += String(element.textContent);
			console.log("first input =", firstInput);
		} else if (count == 2) {
			showCal.textContent = null;
			secondInput = String(element.textContent);
			showCal.textContent = String(element.textContent);
			console.log(secondInput);
			count = 3;
		} else {
			secondInput += String(element.textContent);
			showCal.textContent += String(element.textContent);
			console.log("second input =", secondInput);
		}
	});
});

operators.forEach((element) => {
	element.addEventListener("click", () => {
		userOperator = element.textContent;
		console.log(userOperator, typeof userOperator);
		count = 2;
	});
});

reset.addEventListener("click", () => {
	if (reset.textContent === "C") {
		reset.textContent = "AC";
		showCal.textContent = 0;
		count = 0;
	}
});

result.addEventListener("click", () => {
	firstInput = Number(firstInput);
	secondInput = Number(secondInput);
	if (userOperator == "+") {
		firstInput += secondInput;
	} else if (userOperator == "-") {
		firstInput -= secondInput;
	} else if (userOperator == "x") {
		firstInput *= secondInput;
	} else if (userOperator == "÷") {
		firstInput /= secondInput;
	} else {
		console.log("its not working");
	}
	showCal.textContent = String(firstInput);
	userOperator = null;
	console.log(firstInput);
	count = 0;
});

/* ---------------- */

function calculator2() {
	let firstInput;
	if (count === 0) {
		firstInput = element.textContent;
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
	}
	count++;
	console.log(count);
}

// calculator();
