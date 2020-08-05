const add = function (number1, number2) {
	return number1 + number2;
};

const subtract = function (number1, number2) {
	return number1 - number2;
};

const multiply = function (number1, number2) {
	return number1 * number2;
};

const divide = function (number1, number2) {
	return number1 / number2;
};

$(document).ready(function () {

	// Add
	$("form#add").submit(function (e) { 
		e.preventDefault();
		
		const number1 = parseInt($("#add1").val());
		const number2 = parseInt($("#add2").val());
		const result = add(number1, number2);

		//$("#addOutput").text(result); //Outputs text to emtpy div element to display on page
		alert("The sum is " + result + "!");
	});

	// Subtract
	$("form#subtract").submit(function (e) { 
		e.preventDefault();

		const number1 = parseInt($("#subtract1").val());
		const number2 = parseInt($("#subtract2").val());
		const result = subtract(number1, number2);

		//$("#subtractOutput").text(result); //Outputs text to emtpy div element to display on page
		alert("The difference is " + result + "!");
	});

	// Multiply
	$("form#multiply").submit(function (e) { 
		e.preventDefault();
		
		const number1 = parseInt($("#multiply1").val());
		const number2 = parseInt($("#multiply2").val());
		const result = multiply(number1, number2);

		//$("#multiplyOutput").text(result); //Outputs text to emtpy div element to display on page
		alert("The product is " + result + "!");
	});

	// Divide
	$("form#divide").submit(function (e) { 
		e.preventDefault();
		
		const number1 = parseInt($("#divide1").val());
		const number2 = parseInt($("#divide2").val());
		const result = divide(number1, number2);

		//$("#divideOutput").text(result); //Outputs text to emtpy div element to display on page
		alert("The quotient is " + result + "!");
	});

});