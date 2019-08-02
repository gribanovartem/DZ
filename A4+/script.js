function isPalindrom(str) {
	var strLower = str.toLowerCase();
	strLower = strLower.replace(/ё/g, 'е');
	strLower = strLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()ьъ]/g,"");
	var finalStr = strLower.replace(/\s+/g, '');

	function isPalindrom1(str1) {
		if(str1[0]!=str1[str1.length-1]) {
			return false;
			} else if(str1.length <= 1) {
				return true;
			}
			else {
				return isPalindrom1(str1.slice(1, str1.length-1));
			}
	}
	return isPalindrom1(finalStr);
}
console.log(isPalindrom("епьл лпё"));