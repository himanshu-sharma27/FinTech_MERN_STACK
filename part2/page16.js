function greet(name , callback){
    callback();
    console.log("Welcome " + name);
}
greet("Himanshu",()=>{
    console.log("Hello ");
})
