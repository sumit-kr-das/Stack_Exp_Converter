// Javascript Program to convert prefix to postfix

// function to check if character
// is operator or not
function isOperator(x) {
	switch (x) {
		case "+":
		case "-":
		case "/":
		case "*":
			return true;
	}
	return false;
}

// Convert prefix to Postfix expression
function preToPost(pre_exp) {
	let s = [];

	// length of expression
	let length = pre_exp.length;

	// reading from right to left
	for (let i = length - 1; i >= 0; i--) {
		// check if symbol is operator
		if (isOperator(pre_exp[i])) {
			// pop two operands from stack
			let op1 = s[s.length - 1];
			s.pop();
			let op2 = s[s.length - 1];
			s.pop();

			// concat the operands and operator
			let temp = op1 + op2 + pre_exp[i];

			// Push String temp back to stack
			s.push(temp);
		}

		// if symbol is an operand
		else {
			// push the operand to the stack
			s.push(pre_exp[i] + "");
		}
	}

	// stack contains only the Postfix expression
	return s[s.length - 1];
}

let pre_exp = "*-A/BC-/AKL";
document.write("Postfix : " + preToPost(pre_exp));

// This code is contributed by suresh07.
function prepo() {
	var infixval2 = document.getElementById("pre_post").value;
	let s = "(A-B/C)*(A/K-L)";
	var xs2 = preToPost(infixval2)
	document.getElementById("p_p").innerHTML = xs2;
}
