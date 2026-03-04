//let is a scoped variable, it is only accessible within the block it is defined in. It is not accessible outside of that block.

// function f1(){
//     let x=10;
// }
// f1();
// console.log(x);//Error

// function f1(){
//     var x=10;
// }
// f1();
// console.log(x);//Same works with var

if(1==1){
    let x=10;

}
console.log(x);//Error

if(1==1){
    var x=10;

}
console.log(x);//it works with var as it is not block scoped


