 let employees = ["John","Cathy","Amy","Mike"]

// let employees = new Array("John","Cathy","Amy","Mike")

// // employees.push("David")
// employees = [...employees,"David"]//Using spread operator to add new element in array
// console.log(employees)

// console.log(employees[0])

// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }

for (let e of employees){
    console.log(e)
}