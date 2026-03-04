//Primitive
let a =10; //Number
let name="Himanshu"; //String
let flag = true; // Boolean
let promoted = undefined; // Undefined
let section = null; // Null
let num = 435363783939383838393 // BigInt

//Non-primitive Refernce data types

const Student = {
    name:"Himanshu",
    age: 20
}

console.log(Student);
const s1= Student;
console.log(s1);

Student.age=21;
console.log(s1);//{ name: 'Himanshu', age: 21 } because of reference data type , both s1 and Student are pointing to the same object in memory
