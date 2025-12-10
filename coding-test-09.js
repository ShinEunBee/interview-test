let str = "banana, apple, Kiwi, kiwi, Orange, banana";

let array = str.toLowerCase().replaceAll(",", "").split(" ")

console.log([...new Set(array)].sort());