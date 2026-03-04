// const obj = {
//     name:"Himanshu",
//     skill:"Python"
// }
// console.log(obj)

const obj = new Object()
obj.name='Himanshu'
obj.skill='Python'
console.log(obj)

obj.score = 97
console.log(obj)

obj['rank']=1
console.log(obj)

let key ='city'
let value ='Hyderabad'

obj[key] = value
console.log(obj)

delete obj.skill
console.log(obj)