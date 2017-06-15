function add(a,b){
	return a + b;
}
function subtract(a,b){
	return a - b;
}

function multiply(a,b){
	return a*b;
}

function divide(a,b){
	return a/b;
}

var buttonOne = document.querySelector('button#one');
var buttonTwo = document.querySelector('button#two');
var buttonThree = document.querySelector('button#three');
var buttonFour = document.querySelector('button#four');
var buttonFive = document.querySelector('button#five');
var buttonSix = document.querySelector('button#six');
var buttonSeven = document.querySelector('button#seven');
var buttonEight = document.querySelector('button#eight');
var buttonNine = document.querySelector('button#nine');
var buttonZero = document.querySelector('button#zero');
var screen = document.querySelector('div#screen');

var button = document.getElementsByTagName('button');


	var num = 0;
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
	var id = target.id;
	switch(id){
		case 'one':
			num = 1;
			break;
		case 'two':
			num = 2;
			break;
		case 'three':
			num = 3;
			break;
		case 'four':
			num = 4;
			break;
		case 'five':
			num = 5;
			break;
		case 'six':
			num = 6;
			break;
		case 'seven':
			num = 7;
			break;
		case 'eight':
			num = 8;
			break;
		case 'nine':
			num = 9;
			break;
		case 'zero':
			num = 0;
			break;
		case 'add':
			num = '+';
			break;
		case 'sub':
			num = '-';
			break;
		case 'mult':
			num = 'x';
			break;
		case 'div':
			num = '/';
			break;
		case 'eql':
			num = ' = ' + calculate();
			break;
		case 'clr':
			num = "";
			screen.textContent = "";
			break;
		
	}
	screen.textContent += num;
}, false);

var inputNum = [];
var inputString = "";
var operators = [];
function calculate(){
	operators = [];
	console.log(" screen.textContent: "+ screen.textContent);
	inputString = screen.textContent;
	console.log("inputString:"+inputString);
	inputNum = inputString.split(/[+\-x\/]/);
	console.log("inputNum:"+inputNum);
	//convert string into numbers in array
	for(i=0;i<inputNum.length;i++){
		inputNum[i] = parseInt(inputNum[i]);
	}

	//insert symbols into array operators 
	for(i=0;i<inputString.length;i++){
		switch(inputString[i]){
			case "+":
				operators.push(add);
				break;
			case "-":
				operators.push(subtract);
				break;
			case "x":
				operators.push(multiply);
				break
			case "/":
				operators.push(divide);
				break;
		}
	}
	console.log(inputNum);
	//apply operations on each pair of numbers in inputNum array
	for(i=0;i<operators.length;i++){
		inputNum[1] = operators[i](inputNum[0],inputNum[1]);
		
		inputNum.shift();
	}
	return inputNum[0];
}
