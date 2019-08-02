function deepComp(value1, value2) {
    if(value1===null&&value2===null) {
        return true;
    }
    if(typeof(value1)!=typeof(value2)||(value1===null||value2===null)) {
        return false;
    }
    if(Array.isArray(value1)&&Array.isArray(value2)) {
        for(var i=0; i<value1.length; i++) {
            if(Array.isArray(value1[i])) {
                return deepComp(value1[i], value2[i]);
            }
            if(value1[i]!==value2[i]){
               return false;
            }
        }
        return true;
    }
    if(typeof(value1)==='object'&&typeof(value2)==='object') {
        for(var key in value1) {
            if(key in value2) {
                if(typeof(value1[key])==='object') {
                return deepComp(value1[key], value2[key]);
                }
                if(value1[key]!==value2[key]) {
                return false;
                }
            } else {
                return false;
            }
        }
        for(var key1 in value2) {
            if(key1 in value1) {
                if(typeof(value2[key1])==='object') {
                return deepComp(value2[key1], value1[key1]);
                
                }
                if(value2[key1]!==value1[key1]) {
                return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
}
var H1={ a:5, b: { b1:6, b2:7 } };
var H2={ b: { b1:6, b2:7 }, a:5 };
var H3={ a:5, b: { b1:6 } };
var H4={ a:5, b: { b1:66, b2:7 } };
var H5={ a:5, b: { b1:6, b2:7, b3:8 } };
var H6={ a:null, b:undefined, c:Number.NaN };
var H7={ c:Number.NaN, b:undefined, a:null };
var H8={a:5,b:6};
var H9={c:5,d:6};
var H10={a:5};
var A1=[5,7];
var A2=[5,5,7];
var A3=[5,8,7];
 console.log(deepComp(H1,H2)===true?'тест пройден':'тест НЕ пройден'); //будет true 
 console.log(deepComp(H1,H3)===false?'тест пройден':'тест НЕ пройден');// будет false
 console.log(deepComp(H1,H4)===false?'тест пройден':'тест НЕ пройден');// будет false 
 console.log(deepComp(H1,H5)===false?'тест пройден':'тест НЕ пройден');// будет false 
 console.log(deepComp(H6,H7)===true?'тест пройден':'тест НЕ пройден');// будет true 
 console.log(deepComp(H8,H9)===false?'тест пройден':'тест НЕ пройден');// будет false
 console.log(deepComp(H8,H10)===false?'тест пройден':'тест НЕ пройден');// будет false 
 console.log(deepComp(null,H10)===false?'тест пройден':'тест НЕ пройден');// будет false 
 console.log(deepComp(H10,null)===false?'тест пройден':'тест НЕ пройден');// будет false 
 console.log(deepComp(null,null)===true?'тест пройден':'тест НЕ пройден');// будет true 
 console.log(deepComp(null,undefined)===false?'тест пройден':'тест НЕ пройден');// будет false
 console.log(deepComp(5,"5")===false?'тест пройден':'тест НЕ пройден');// будет false 
 console.log(deepComp(5,H1)===false?'тест пройден':'тест НЕ пройден');// будет false
console.log(deepComp(A1,H1)===false?'тест пройден':'тест НЕ пройден');// будет false
 console.log(deepComp(A2,A3)===false?'тест пройден':'тест НЕ пройден');// будет false 