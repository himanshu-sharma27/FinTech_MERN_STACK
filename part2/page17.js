// function outer(){
//     let n=1;
//     function inner(){
//         return n++
//     }
//     return inner;
// }
// const f = outer();
// console.log(f());
// console.log(f());

//---------------------------

// function outer(){
//     let password = '123456';
//     function inner(pwd){
//         if(pwd === password){
//             return 'Access granted';
//         }else{
//             return 'Access denied';
//         }
//     }
//     return inner;
// }

// const checkPassword = outer();
// console.log(checkPassword('1234')); 

function outer(){
    let password = '123456';
    function inner(pwd){
        return pwd === password ? "Access granted" : "Access denied";
    }
    return inner;
}

const checkPassword = outer();
console.log(checkPassword('123456')); 