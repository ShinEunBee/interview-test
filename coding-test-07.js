let str = "Hello World!";

const array = str.toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    }, {})

console.log(array);