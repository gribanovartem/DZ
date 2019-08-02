function isPalindrom(str) {
	var strLower = str.toLowerCase();
	
	strLower = strLower.replace(/ё/g, 'е');
	strLower = strLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()ьъ]/g,"");
	var finalStr = strLower.replace(/\s+/g, '');

	for(i=0; i<Math.floor(finalStr.length/2); i++) {
		if(finalStr[i]!=finalStr[finalStr.length-i-1]) {
		return false;
		}
	}
	return true;
}
console.log(isPalindrom(""));

