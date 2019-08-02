// function isPalindrom(str) {
// 	var strLower = str.toLowerCase();
	
// 	for(var i=0; i<strLower.length; i++) {
// 		if(strLower[i]=="ё") {
// 			strLower = strLower.substr(0, i) + 'е' + strLower.substr(i + 1);
// 		}
// 	}

// 	var finalStr = strLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()ьъ]/g,"");
// 	var finalStr1 = finalStr.replace(/\s+/g, '');

// 	for(i=0; i<finalStr1.length; i++) {
// 		if(finalStr1[i]!=finalStr1[finalStr1.length-i-1]) {
// 		return 'Это не палиндром';
// 		}
// 	}
// 	return 'Это палиндром';
// }
// console.log(isPalindrom("ён ,./-jн  .ьЪ/_е"));

