let array = ["Cat", "cAt", "dog", "DOG", "doG"];

// console.log(array.map(v => v.toLowerCase())
//                 .filter(v => array.indexOf(v) !== -1)
//                 .sort((a,b) => a-b )
// );

console.log(
    [...new Set(array.map(v => v.toLowerCase()))].sort() // 문자열은 sort만 쓰기
);