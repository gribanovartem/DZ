// function deleteSpace(str) {
// for(var i=0; i<str.length; i++) {
//   if(str[i]!=0) {
//   	break;
//   }
// }
// var startSlice = i;
// for(var j=str.length-1; j>=0; j--) {
// 	if(str[j]!=0) {
// 		break;
// 	}
// }
// var endSlice = j+1;
// return str.slice(startSlice, endSlice);
// }
// console.log(deleteSpace("  aa abb   "));
// console.log(deleteSpace("     a     "));
// console.log(deleteSpace(" ababb    "));



function partsSums(ls) {
    var ls1 = [];
    var sum = 0;
    for(var j=0; j<ls.length; j++) {
    for(var i=0; i<ls.length; i++) {
      sum =+ ls[i];
    }
    
    ls1.push(sum);
    ls.shift();
    }
    console.log(ls1);
    return ls1;
    
 }