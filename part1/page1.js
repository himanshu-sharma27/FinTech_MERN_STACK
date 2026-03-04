//let,var,const
let a =10;
console.log(a);
var b =20;
console.log(b);
const c =30;
console.log(c);

//hoisting
console.log(x);
var x = 100;//undefined is the output because of hoisting , it works like flag hoisting bottom to up 

console.log(y);
let y = 200;//ReferenceError: Cannot access 'y' before initialization because the variable is stored in the TDZ - Temporal Dead Zone

//Same apploes to const as well , where variable is not accessible 
