// let array = ["Cat", "cAt", "DOG", "dog", "doG", "cat"];

// let newArray = array.map((v) => v.toLowerCase());

// console.log([...new Set(newArray)].sort());

// const cart = [
//   { name: "A", amount: 2, price: 5000 },
//   { name: "B", amount: 3, price: 8000 },
//   { name: "C", amount: 2, price: 15000 }
// ];

// console.log(cart.filter((v) => v.amount * v.price >= 30000).map((item) => {
// return { name : item.name , totalPrice: item.amount * item.price };
// }));

// const dates = ["2025-12-01", "2025-11-20", "2025-11-30"];

// console.log(dates.sort()[0]);

// const names = ["Alice", "Alex", "Bob", "Brian", "Charlie"];

// let newNames = names.reduce((acc, cur) => {

//     let first = cur.charAt(0);

//     if(!acc[first]){
//         acc[first] = [];
//     }

//     acc[first].push(cur);

//     return acc;
// }, {})

// console.log(newNames);

let str = "Hello World";

let arr = str.replaceAll(" ", "").toLowerCase();

let arr2 = arr.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0)+1;
    return acc;
}, {});

let mchar = "";
let mcount = 0;

for(let i in arr2){
    if(arr2[i] > mcount){
        mcount = arr2[i];
        mchar = i;
    }
};

console.log(mchar);