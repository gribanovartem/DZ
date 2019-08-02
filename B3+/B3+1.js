function calculate(exp) {
	exp = exp.split('');
	var fragmentResult = 0;
	function calcFragment(exp) {
// проверка на дробное число, вычисление кол-ва цифр до и после точки,
// вырезаем числа до и после точки, вставляем готовое число 
		while(exp.indexOf(".")>=0) {	
			var dot = exp.indexOf(".");
			var count = 2;
			var countLeft = 0;
			var aaa = '';
			var bbb = '';
			for(var k=dot+1; k<exp.length; k++){
				if(!isNaN(exp[k])) {
					count++;
					aaa += exp[k];
				} 
				else {
					break;
				}
			}
			for(var d=dot; d>=0; d--) {
				if(!isNaN(exp[d-1])) {
					countLeft++;
					bbb += exp[d-1];
				} 
				else {
					break;
				}
			}
			bbb = bbb.split('').reverse().join('');
			var dotFr = parseFloat(bbb) + parseFloat(aaa)/(10**(count-2));
		    dotFr = dotFr.toFixed(count-2);
			exp.splice(dot-countLeft, count+countLeft-1, dotFr);
		}
// проверяем сколькозначное число, вырезаем числа между операндами,
// вставляем готовое число
		for(var f=0; f<=exp.length; f++) {
			if(!isNaN(exp[f]) && !isNaN(exp[f+1])) {
				exp.splice(f, 2, exp[f]+exp[f+1]);
			}
		}
// ищем скобки, вырезаем все между скобками и передаем 
// в качестве аргумента рекурсивной функции
		while (exp.indexOf('(')>=0 || exp.indexOf(')')>=0) {
			var bracketStart = exp.indexOf('(');
			var bracketEnd = exp.lastIndexOf(')');
			var fragment = exp.slice(bracketStart+1, bracketEnd);
			exp.splice(bracketStart, fragment.length+2, calcFragment(fragment));
		}
// проверяем есть ли отрицательное значение, если есть то 
// вырезаем его, отнимаем от нуля это значение и вставляем готовое число 
		while(isNaN(parseFloat(exp[exp.indexOf('-')-1])) && exp.indexOf('-')>-1) {
			var minus = exp.indexOf('-');
			var ins = String(0-parseFloat(exp[minus+1]));
			exp.splice(minus, 2, ins);	
		}
// сначала делаем умножение и деление, вырезаем, вставляем, вызываем рекурсию
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
// потом сложение, вычитание, вырезаем, вставляем, вызываем рекурсию
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
		return +fragmentResult.toFixed(10);
	}
	return calcFragment(exp);
}

console.log(calculate('7/9.5963+-(18/6*-(100.5*1.5-15)+34.5)'));
    