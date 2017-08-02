n=1
()
n=2
()()
(())
n=3
((()))
()()()
(())()
()(())
(()())


              (
       ()         ((
     ()(   (x))       (((    (()
  ()(( ()() x x     ((()    (())

Javascript

Input: integer
Output: string array

function main(n) {
	var result = [];
helper (“”, result, n, 0, 0);
return result;
}

function helper(oneAns, result, n, numLeft, numRight) {
	// terminate condition: string.length
	If (oneAns.length === n*2) {
		result.push(oneAns);
	}
	// concat “(“ first
	var tmp = oneAns.slice();
	//If the number “(“ is less than n, then tmp += “(“;
	If (numLeft < n) {
tmp += “(“;
}
numLeft += 1;
	helper(tmp, result, n, numLeft, numRight);
//helper ( “(“, [], 3, 1, 0);

	// concat “)”
	tmp = oneAns.slice();
	//If the number “(“ is greater than “)”, then tmp += “)“;
If (numLeft > numRight) {
tmp += “)“;
}
numRight += 1;
	helper(tmp, result, n, numLeft, numRight);
//helper ( ““, [], 3, 0, 0);
}

//helper ( “(“, [], 3, 1, 0);
	//helper ( “((“, [], 3, 2, 0);
		//helper ( “(((“, [], 3, 3, 0);
			//helper ( “((()“, [], 3, 3, 1);
		//helper ( “(()“, [], 3, 2, 1);

//helper ( “()“, [], 3, 1, 1);
