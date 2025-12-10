const products = [
  { name: "A", price: 10000 },
  { name: "B", price: 25000 },
  { name: "C", price: 30000 },
  { name: "D", price: 15000 },
];

console.log(products.filter( v => v.price >= 20000).sort((a, b) => b.price - a.price));