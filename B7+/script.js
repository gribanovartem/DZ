"use strict";
function formatNumber(num, format) {
    var dot=format.indexOf('.');
    var fix=format.length-1-dot;
    var formatNum = (num.toFixed(fix).split(''));
    for(var i=format.length-1; i>=0; i--) {
       if(format[i]===' ') {
           var pos=format.length-i-1;
            if(formatNum.length-pos>0) {
                formatNum.splice(-pos, 0, ' ');
            }
        }
    }
    return formatNum.join('');
}
console.log(formatNumber(2.3,"# ### ###.##"));
console.log(formatNumber(12345.368,"# ### ###.##"));