// getType.js 에서 getType() 함수를 import 합니다.
import getType from "./getType";

console.log('🔹🔹type of / getType🔹🔹');
console.log(typeof 123); // Output: "number"
console.log(typeof '123'); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "array"

console.log('getType(123) ' + getType(123)); // Output: "Number"
console.log('getType("123") ' + getType("123")); // Output: "String"
console.log('getType(true) ' + getType(true)); // Output: "Boolean"
console.log('getType(undefined) ' + getType(undefined)); // Output: "Undefined"
console.log('getType(null) ' + getType(null)); // Output: "Null"
console.log('getType({}) ' + getType({})); // Output: "Object"
console.log('getType([]) ' + getType([])); // Output: "Array"
console.log('🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔸🔸산술, 할당 연산자🔸🔸');
// 할당 연산자
const x = 5;   // 재할당 불가
let y = 2;  // 재할당 가능
// 산술 연산자
console.log(x + y); // 7
console.log(x - y); // 3
console.log(x * y); // 10
console.log(x / y); // 2.5
console.log(x % y); // 1 나머지 연산

y += 1; // b = b + 1 
y -= 1; // b = b - 1
y *= 2; // b = b * 2
y %= 2; // b = b % 2
console.log('🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔹🔹비교, 논리 연산자🔹🔹');
let a = 3
let b = 1
let c = '3'
// 비교 연산자
console.log(a < b); // false, a가 b보다 작다
console.log(a > b); // true, a가 b보다 크다 
console.log(a <= b); // false, a가 b보다 작거나 같다
console.log(a >= b); // true, a가 b보다 크거나 같다
console.log(a == b); // false, a와 b의 값이 같다(type 무시)
console.log(a == c); // true, a와 c의 값이 같다(type 무시)
console.log(a === b); // false, a와 b의 값이 같다(type 일치)
console.log(a === c); // false, a와 c의 값이 같다(type 일치)
console.log(a !== b); // true, a와 b의 값이 다르다(type 일치)
// 논리 연산자
console.log(a && b && c); // &&은 a, b, c가 모두 true일 때 제일 마지막 항의 값을 반환환
console.log(a || b || c); // ||는 a, b, c 중에서 1개라도도 true일 때 제일 앞쪽에 있는 true항의 값을 반환
console.log(!a); // true, a가 true 일 때  false, a가 false일 때 true
console.log('🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔸🔸삼항 연산자🔸🔸');
let d = true;
// 삼항 연산자
console.log(d ? '참' : '거짓'); // d가 true일 때 '참', d가 false일 때 '거짓'
console.log('🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔹🔹조건문 If Else🔹🔹');
function random () { return Math.floor(Math.random() * 10)}
// 조건문 If else
if (random() === 0) { // random() === 0일 때 {} 실행문 실행, 0이 아니면 다음 else if문으로 넘어감
  console.log('random is 0'); 
} else if (random() === 2) { // random() === 2일 때 {} 실행문 실행, 2가 아니면 else if문으로 넘어감
  console.log('random is 2');
} else if (random() === 4) { // random() === 4일 때 {} 실행문 실행, 4가 아니면 else문으로 넘어감
  console.log('random is 4');
} else {  // random() === 0, 2, 4가 아닐 때 {} 실행문 실행
  console.log('random is not 0, 2, or 4');
}
console.log('🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔸🔸조건문 switch🔸🔸');
// 조건문 switch
switch (random()) {
  case 0:
    console.log('random is 0');
    break;
  case 2:
    console.log('random is 2');
    break;
  case 4:
    console.log('random is 4');
    break;
  default:
    console.log('random is not 0, 2, or 4');
    break;
}
console.log('🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔹🔹반복문 For🔹🔹');
// 반복문 For
for (let i = 0; i < 3 ; i += 1) {
  console.log(`now i value is ${i}`);
}
console.log('🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔸🔸변수 유효범위 (Scope)🔸🔸');
// let, const의 유효범위는 해당 변수가 선언된 블록 범위 내부이다.
console.log(e); // undefined

let e = 10; // 전역변수 e 선언 , 값 10 할당

function test() { 
  let e = 20; // 지역변수
  console.log(e); // undefined , 블록 내에서 e 가 선언/할당되지 않았음
  console.log(e); // 지역변수 e 출력 = 20
}

test();
console.log(e); // 전역변수 e 출력 = 10
console.log('🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log('🔹🔹형(Type) 변환🔹🔹');
/* Truthy : true, {}, [], 1, 2, 'false', -12, '3.14' ... */
/* Falsy : false, '', null, undefined, 0, -0, NaN */
console.log('🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹');

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'