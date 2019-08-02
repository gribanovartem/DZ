function calculate(exp) {
	exp = exp.split('');
	var fragmentResult = 0;
	function calcFragment(exp) {
		while (exp.indexOf('(')>=0 || exp.indexOf(')')>=0) {
			var bracketStart = exp.indexOf('(');
			var bracketEnd = exp.indexOf(')');
			var fragment = exp.slice(bracketStart+1, bracketEnd);
			exp.splice(bracketStart, fragment.length+2, calcFragment(fragment));
		}
		for(var i=0; i<exp.length; i++) {
			var fragmentStart = parseFloat(exp[i-1]);
			var fragmentEnd = parseFloat(exp[i+1]);
			switch (exp[i]) {
				case "*":
					fragmentResult = fragmentStart*fragmentEnd;
					exp.splice(i-1, 3, fragmentResult);
					calcFragment(exp);
					break;
				case "/":
					fragmentResult = fragmentStart/fragmentEnd;
					exp.splice(i-1, 3, fragmentResult);
					calcFragment(exp);
					break;	
				default:
					break;
			}	
		}
		for(var j=0; j<exp.length; j++) {
			var fragmentStart1 = parseFloat(exp[j-1]);
			var fragmentEnd1 = parseFloat(exp[j+1]);
			switch (exp[j]) {
				case "+":
					fragmentResult = fragmentStart1+fragmentEnd1;
					exp.splice(j-1, 3, fragmentResult);
					calcFragment(exp);
					break;
				case "-":
					fragmentResult = fragmentStart1-fragmentEnd1;
					exp.splice(j-1, 3, fragmentResult);
					calcFragment(exp);
					break;
				default:
					break;
			}	
		}
		return fragmentResult;
	}
	return calcFragment(exp);
}
console.log(calculate('3-(1+3-2)+(7-3*2)'));
console.log(calculate('3+1*2'));
