function deepCopy(obj) {
    if(typeof obj!=='object' || obj===null ) {
        return obj;
    }
    if(obj instanceof Array) {
       return obj.map(i => {
        return deepCopy(i);
       });
    }
    if(obj instanceof Object) {
        return Object.keys(obj).reduce((newObj, r, i, a) => {
            newObj[r] = deepCopy(obj[r]);
            return newObj;
        }, {});
    }
   
}

var h1={ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };
var h2=deepCopy(h1);
console.log(h1===h2);
console.log(h1.a===h2.a);
console.log(h1.b===h2.b);
console.log(h1.b.b1===h2.b.b1);
console.log(h1.c===h2.c);
console.log(h1.c[0]===h2.c[0]);
console.log(h1.d===h2.d);
console.log(h1.e===h2.e);
console.log(isNaN(h2.f));
console.log(h2.c instanceof Array);

var v1 = "sss";
var v2 = deepCopy(v1);
console.log('typeof(v2)===typeof(v1) ' + (typeof(v2)===typeof(v1)));
console.log('v1===v2 ' + (v1===v2));

var z1 = null;
var z2 = deepCopy(z1);
console.log('typeof(z2)===typeof(z1) ' + (typeof(z2)===typeof(z1)));
console.log('z1===z2 ' + (z1===z2));

var n1 = Number.NaN;
var n2 = deepCopy(n1);
console.log('typeof(n2)===typeof(n1) ' + (typeof(n2)===typeof(n1)));
console.log('isNaN(n2) ' + isNaN(n2));

var a1=[5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
var a2=deepCopy(a1);
console.log(a1===a2);
console.log(typeof(a2)===typeof(a1));
console.log(a1[0]===a2[0]);
console.log(a1[1]===a2[1]);
console.log(a1[1].b1===a2[1].b1);
console.log(a1[2]===a2[2]);
console.log(a1[2][0]===a2[2][0]);
console.log(a1[3]===a2[3]);
console.log(a1[4]===a2[4]);
console.log(isNaN(a2[5]));
console.log(a2[2] instanceof Array);