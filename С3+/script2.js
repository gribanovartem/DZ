"use strict";
function deepComp(value1, value2) {
	function type(value) {
		return Object.prototype.toString.call(value);
	}
	if((type(value1))!==(type(value2))) {
		return false;
	}
	switch(type(value1)) {
		case "[object Null]":
			return true;
	   case "[object Array]":
	   	if(value1.length!==value2.length){
   			return false;
   		}
   		for(let i=0; i<value1.length; i++) {
   		   if(!deepComp(value1[i], value2[i])) {
      			return false;
      		}
   		}
   		return true;
   	case "[object Object]":
		   if(Object.keys(value1).length!==Object.keys(value2).length) {
			   return false;
		   }
        for(var key in value1) {
			if(!(key in value2)) {
				return false;
			} 
			else if(!deepComp(value1[key], value2[key])) {
				return false;
			}
		}
   		return true;
   	default:
   		if(value1===value2 || (isNaN(value1)&&isNaN(value2))) {
   			return true;
   		} else return false;
   	}
}
var H1={ a:5, b: { b1:6, b2:7 } };
var H2={ b: { b1:6, b2:7 }, a:5 };
var H3={ a:5, b: { b1:6 } };
var H4={ a:5, b: { b1:66, b2:7 } };
var H5={ a:5, b: { b1:6, b2:7, b3:8 } };
var H6={ a:null, b:undefined, c:Number.NaN};
var H7={ c:Number.NaN, b:undefined, a:null };
var H8={a:5,b:6};
var H9={c:5,d:6};
var H10={a:5};
var A1=[5,7];
var A2=[5,5,7];
var A3=[5,8,7];
console.log(deepComp(H1,H2)===true?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(H1,H3)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(H1,H4)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(H1,H5)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(H6,H7)===true?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(H8,H9)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(H8,H10)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(null,H10)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(H10,null)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(null,null)===true?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(null,undefined)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(5,"5")===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(5,H1)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(A1,H1)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(A2,A3)===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp({"B":undefined},{"A":5})===false?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp([2,5],[2,5])===true?'проверка проходит':'проверка НЕ проходит');
console.log(deepComp(NaN, 5)===false?'проверка проходит':'проверка НЕ проходит');