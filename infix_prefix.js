function isOperator(c) {
	return (
		!(c >= "a" && c <= "z") &&
		!(c >= "0" && c <= "9") &&
		!(c >= "A" && c <= "Z")
	);
}

function getPriority(C) {
	if (C == "-" || C == "+") return 1;
	else if (C == "*" || C == "/") return 2;
	else if (C == "^") return 3;
	return 0;
}

function infixToPrefix(infix) {
	let operators = [];
	let operands = [];

	for (let i = 0; i < infix.length; i++) {
		if (infix[i] == "(") {
			operators.push(infix[i]);
		}

		else if (infix[i] == ")") {
			while (operators.length != 0 && operators[operators.length - 1] != "(") {
				let op1 = operands.pop();
				let op2 = operands.pop();
				let op = operators.pop();
				let tmp = op + op2 + op1;
				operands.push(tmp);
			}
			operators.pop();
		}

		else if (!isOperator(infix[i])) {
			operands.push(infix[i] + "");
		}

		else {
			while (
				operators.length &&
				getPriority(infix[i]) <= getPriority(operators[operators.length - 1])
			) {
				let op1 = operands.pop();
				let op2 = operands.pop();
				let op = operators.pop();
				let tmp = op + op2 + op1;
				operands.push(tmp);
			}

			operators.push(infix[i]);
		}
	}

	while (operators.length != 0) {
		let op1 = operands.pop();
		let op2 = operands.pop();
		let op = operators.pop();
		let tmp = op + op2 + op1;
		operands.push(tmp);
	}

	return operands[operands.length - 1];
}

function inprf() {
	var infixval = document.getElementById("i_pre").value;
	let s = "(A-B/C)*(A/K-L)";
	var xs = infixToPrefix(infixval)
	document.getElementById("i_f").innerHTML = xs;
}

