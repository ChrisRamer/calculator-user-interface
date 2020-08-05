const add = function (number1, number2) {
	return number1 + number2;
}

const subtract = function(number1, number2) {
	return number1 - number2;
}

const multiply = function(number1, number2) {
	return number1 * number2;
}

const divide = function(number1, number2) {
	return number1 / number2;
}

const remainder = function(number1, number2) {
	return number1 % number2;
}

doMath();

function doMath()
{
	const action = prompt("Which math operation would you like to perform?").toLowerCase();

	if (action == "add" || action == "addition") {
		const number1 = parseFloat(prompt("What number would you like to start with?"));
		const number2 = parseFloat(prompt("What number are you adding to " + number1 + "?"));
		const sum = add(number1, number2);
		alert(number1 + " + " + number2 + " = " + sum + "\nYou're now an addition wizard!");

		moreMath();
	}

	else if (action == "subtract" || action == "subtraction") {
		const number1 = parseFloat(prompt("What number would you like to start with?"));
		const number2 = parseFloat(prompt("What number are you subtracting from " + number1 + "?"));
		const difference = subtract(number1, number2);
		alert(number1 + " - " + number2 + " = " + difference + "\nYou're now a subtraction wizard!");

		moreMath();
	}

	else if (action == "multiply" || action == "multiplication") {
		const number1 = parseFloat(prompt("What number would you like to start with?"));
		const number2 = parseFloat(prompt("What number are you multipliying " + number1 + " with?"));
		const product1 = multiply(number1, number2);
		alert(number1 + " * " + number2 + " = " + product1 + "\nYou're now a multiplication wizard!");

		moreMath();
	}

	else if (action == "divide" || action == "division") {
		const number1 = parseFloat(prompt("What number would you like to start with?"));
		const number2 = parseFloat(prompt("What number are you dividing " + number1 + " by?"));
		const quotient = divide(number1, number2);
		alert(number1 + " / " + number2 + " = " + quotient + "\nYou're now a division wizard!");

		moreMath();
	}

	else if (action == "remainder") {
		const number1 = parseFloat(prompt("What number would you like to start with?"));
		const number2 = parseFloat(prompt("What number are you dividing " + number1 + " with to get the remainder?"));
		const result = remainder(number1, number2);
		alert(number1 + " % " + number2 + " = " + result + "\nYou're now a super division wizard!");

		moreMath();
	}

	else {
		alert(action + " is not a valid math operation! Please specifiy a valid math operation ya goof!");
		doMath();
	}
}

function moreMath() {
	const doContinue = confirm("Would you like to do more math?");
	if (doContinue) {
		doMath()
	}
}