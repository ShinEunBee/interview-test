const cart = [
  { item: "apple", amount: 2, price: 1000 },
  { item: "banana", amount: 1, price: 1500 },
  { item: "apple", amount: 1, price: 1000 },
  { item: "orange", amount: 3, price: 2000 },
];

const newArray = cart.reduce((acc, cur) => {
    acc[cur.item] = ( acc[cur.item] || 0) + (cur.amount * cur.price);

    return acc;
}, {});

console.log(newArray);