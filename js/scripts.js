// Business logic:

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

// Everything below this line is user interface logic:

$(document).ready(function () {

	$("form#add").submit(function (e) { 
		e.preventDefault();
		
		const number1 = parseInt($("#add1").val());
		const number2 = parseInt($("#add2").val());
		const result = add(number1, number2);

		//$("#addOutput").text(result); Outputs text to emtpy div element to display on page
		alert("The sum is " + result + "!");
	});

	$("form#subtract").submit(function (e) { 
		e.preventDefault();

		const number1 = parseInt($("#subtract1").val());
		const number2 = parseInt($("#subtract2").val());
		const result = subtract(number1, number2);

		//$("#subtractOutput").text(result); Outputs text to emtpy div element to display on page
		alert("The difference is " + result + "!");
	});

});