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

let dot = document.querySelector(".dot");

let reset = document.querySelector(".reset");
let showCal = document.querySelector(".show");

let result = document.querySelector(".result");

// Variables
let count = 0;
let firstIteration = 0;
let firstInput = "";
let secondInput = "";
let userOperator = "";

// Event Listener
numbersList.forEach((element) => {
	element.addEventListener("click", () => {
		reset.textContent = "C";

		if (count == 0) {
			firstInput = String(element.textContent);
			showCal.textContent = String(element.textContent);
			console.log(firstInput);
			count = 1;
			firstIteration = 1;
		} else if (count == 1) {
			firstInput += String(element.textContent);
			showCal.textContent += String(element.textContent);
			console.log("first input =", firstInput);
		} else if (count == 2 && secondInput != "0.") {
			// showCal.textContent = null;
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

dot.addEventListener("click", () => {
	if (!firstInput.includes(dot.textContent)) {
		firstInput += dot.textContent;
		console.log(firstInput)
		showCal.textContent = firstInput;
	} else if (!secondInput.includes(dot.textContent)) {
		secondInput += dot.textContent;
		console.log(secondInput);
		showCal.textContent = secondInput
	}

	// if (count == 0) {
	// 	firstInput = String(0);
	// 	firstInput += String(dot.textContent);
	// 	showCal.textContent = firstInput;
	// 	count = 1;
	// 	console.log(firstInput);
	// } else if (count == 1) {
	// 	firstInput += String(dot.textContent);
	// 	showCal.textContent = firstInput;
	// } else if (count == 2) {
	// 	secondInput = String(0)
	// 	secondInput += String(dot.textContent);
	// 	showCal.textContent = secondInput;
	// 	count = 3;
	// } else {
	// 	secondInput += String(dot.textContent)
	// 	showCal.textContent = secondInput;
	// 	console.log(secondInput)
	// }
});

operators.forEach((element) => {
	element.addEventListener("click", () => {
		if (firstIteration == 0 && element.textContent == "-") {
			firstInput = String(element.textContent);
			showCal.textContent = String(element.textContent);
			count = 1;
			firstIteration = 1;
		} else {
			userOperator = element.textContent;
			console.log(userOperator, typeof userOperator);
			count = 2;
		}
	});
});

reset.addEventListener("click", () => {
	if (reset.textContent === "C") {
		reset.textContent = "AC";
		showCal.textContent = 0;
		firstIteration = 0;
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

	showCal.textContent = (firstInput.toLocaleString(firstInput));
	userOperator = null;
	console.log(firstInput);
	count = 0;
});
