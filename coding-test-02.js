// 입력된 문자열을 첫 글자 대문자 + 나머지 소문자로 변환하기
const str = "heLLo";

function charToLower(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(charToLower(str));

return charToLower(str);
