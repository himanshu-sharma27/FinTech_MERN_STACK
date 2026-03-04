const products = [
    {id :1,name:"Product 1",price:25},
    {id :2,name:"Product 2",price:50},
    {id :3,name:"Product 3",price:45},
];
let cart=[]
//Display all products using for each
function displayProducts(){
products.forEach((prod) => {
    console.log(prod);
})
}


//Display products with price above 40
products.filter((prod) => prod.price > 40);


//Add product 2 cart using spread operator with a new key quantity and assign

function addToCart(id){
    const product = products.find((prod) => prod.id === id);
    const cartItem = {...product, quantity:1}
    cart.push(cartItem)
}

//Display cart
function displayCart(){
cart.forEach((item) =>{
    console.log(item);
})
}

displayProducts()
addToCart(2)
displayCart()
addToCart(1)
displayCart()


