let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer.balance);
}

function deposit(id,amount){
    const customer = customers.find((customer) => customer.id === id);
    customer.balance += amount;
    customer.transactions.push({type : 'credit', amount: amount, date : new Date()})
}

function withdraw(id , amount){
  const customer = customers.find((customer) => customer.id === id);
  if(customer.balance < amount){
    console.log ( `Insufficient balance`);
  }
  customer.balance -= amount;
  customer.transactions.push({type : 'debit', amount: amount, date : new Date()})
}

function showTransactions(id){
    const customer = customers.find((customer) => customer.id === id);
    // console.log(customer.transactions);
    console.table(customer.transactions)
  }

deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
showTransactions(1);
withdraw(2,500);
showTransactions(2);