const employee = {
    name : "Himanshu",
    city : "Hyderabad",
    state:"Telangana"
}

// const name = employee.name
// const city = employee.city

//We can use Destructuring
const {name,city}=employee
console.log(name,city)