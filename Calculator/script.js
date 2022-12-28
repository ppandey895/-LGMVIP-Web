
//functions for user inputs

function num(n){
	var value = document.getElementById('input').value;
	var n_val = value + n;
	document.getElementById('input').value = n_val;
}

function pressp(){
	var pressed = '+';
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed);
	document.getElementById('input').value = n_val;
}

function pressm(){
	pressed = '-'
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed);
	document.getElementById('input').value = n_val;
}
function pressd(){
	pressed = '/'
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed);
	document.getElementById('input').value = n_val;
}

function pressmul(){
	pressed = '*'
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed);
	document.getElementById('input').value = n_val;
}
function pressr(){
	var value = document.getElementById('input').value;
	try {
	  var result = eval(value);
	}
	catch(err) {
	  var result = 'error';
	}
	document.getElementById('input').value = result;
}

function pressC(){
	document.getElementById('input').value = '';
}


function checker(str, press){

	//checks for an arithmetic operator before adding another operator

	if((str[str.length - 1] == '+') || (str[str.length - 1] == '-') || (str[str.length - 1] == '/') || (str[str.length - 1] == '*')){
		var new_value = str.slice(0, str.length - 1) + press;
		return new_value;
	}
	else{
		return str + press;
	}
}