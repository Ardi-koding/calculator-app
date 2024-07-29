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

let reset = document.querySelector(".reset");
let showCal = document.querySelector(".show");

// Calculator
let count = 0;
let firstInput = null;
let secondInput = null;
let userOperator = null;

function calculator() {
	if (userOperator == "+") {
		firstInput += secondInput;
	} else if (userOperator == "-") {
		firstInput -= secondInput;
	} else if (userOperator == "*") {
		firstInput *= secondInput;
	} else if (userOperator == "/") {
		firstInput /= secondInput;
	}
}

// Event Listener
numbersList.forEach((element) => {
	element.addEventListener("click", () => {
		reset.textContent = "C";

		if (count == 0) {
			firstInput = String(element.textContent);
			showCal.textContent = String(element.textContent);
			count++;
		} else if (count != 0) {
			firstInput += String(element.textContent);
			showCal.textContent += String(element.textContent);
			console.log(firstInput);
		}
		// else if (firstInput != null) {
		// 	secondInput = String(element.textContent);
		// } else if ((firstInput != null) & (secondInput != null)) {
		// 	calculator()
		// }
	});
});

operators.forEach((element) => {
	element.addEventListener("click", () => {
		userOperator = element.textContent;
		count++;
	});
});

reset.addEventListener("click", () => {
	if (reset.textContent === "C") {
		reset.textContent = "AC";
		showCal.textContent = 0;
		count = 0;
		firstInput = null;
		// console.log(firstInput)
	}
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
