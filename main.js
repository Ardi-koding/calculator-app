let calculations = 0;

const prompt = require("prompt-sync")();

let firstInput = Number(prompt("angka pertama"));
let secondInput = Number(prompt("angka kedua"));

let userOperator = prompt("masukkan operatormu");

let result = 0;

if (userOperator == "+") {
	result = firstInput + secondInput;
} else if (userOperator == "-") {
	result = firstInput - secondInput;
} else if (userOperator == "*") {
	result = firstInput * secondInput;
} else if (userOperator == "/") {
	result = firstInput / secondInput;
} else {
	console.log("not an operator!");
}

console.log(result);
