const employee = {
    name:"Himanshu",
    address:{
        city:"Hyderabad",
        state:"Telangana"
    }//Nested object
}
console.log(employee.address.city)
employee.address.country = "India"
console.log(employee)//Adding new keys in nested object