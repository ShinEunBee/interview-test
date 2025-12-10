let array = ["Apple", "banana", "BANANA", "Dog", "appLe", "cat"];

// 중복 단어 제거 / 소문자 변환 / 길이 오름차순 / 길이 같으면 알파벳 순

// console.log([...new Set(array.map(v => v.toLowerCase()))].sort((a,b) => a.length - b.length));
console.log([...new Set(array.map(v => v.toLowerCase()))].sort((a,b) => a.length - b.length || a.localeCompare(b)));

//a.localeCompare(b) -> 길이가 같을 때 사전순 정렬