// const stock= {
//     name : "Wipro",
//     lastPrice:200,
//     currPrice:250,
//     growth: function(){
//         return (this.currPrice-this.lastPrice)
//     },
//     growthPer: function(){
//         return ((this.growth()/this.lastPrice)*100)
//     }
// }
// console.log(stock.growthPer())

const stock= {
    name : "Wipro",
    lastPrice:200,
    currPrice:250,
    growth: function(){
        return (this.currPrice-this.lastPrice)
    },
    growthPer: function(){
        return ((this.growth()/this.lastPrice)*100)
    }
}
console.log(stock.growthPer())

// we cant use this keyword in arrow functions it will throw errorconst stock= {


