/* import export default */
import getType from "./getType";
import getRandom from "./getRandom";

console.log(`'Hello world!'의 typeof 값은? = `,typeof 'Hello world!');
console.log(`123의 typeof 값은? = `,typeof 123);
console.log(`true의 typeof 값은? = `,typeof true);
console.log(`undefined의 typeof 값은? = `,typeof undefined);
console.log(`null의 typeof 값은? = `,typeof null);
console.log(`{}의 typeof 값은? = `,typeof {});
console.log(`[]의 typeof 값은? = `,typeof []);

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));


// 산술연산자
console.log(0+1); //1
console.log(3-1); //2
console.log(1*3); //3
console.log(8/2); //4
console.log(11%6); //5


// 할당연산자
const a = 2
let b = 2 // b = b + 1
b += 1 // b = 3
b -= 1 // b = 2


// 비교연산자
let aa = 1
let bb = 1
console.log(`aa === bb  `,aa === bb); // true

bb = 3
console.log(`aa === bb  `,aa === bb); // false  
console.log(`aa !== bb  `,aa !== bb); // true
console.log(`aa > bb  `,aa > bb); // false
console.log(`aa < bb  `,aa < bb); // true


// 논리연산자 (&&은 AND, ||은 OR)
let aaa = 1 === 1 // true
let bbb = 'AB' === 'AB' // true
let ccc = true
console.log('&&:', aaa && bbb && ccc); // true

ccc = false
console.log('&&:', aaa && bbb && ccc); // false
console.log('||:', aaa || bbb || ccc); // true

bbb = 'AB' === 'ABC'
console.log('||:', aaa || bbb || ccc); // true

aaa = 1 === 0
console.log('||:', aaa || bbb || ccc); // false
console.log('!:', !ccc); // true


// 삼항연산자
const aaaa = true

console.log(aaaa ? '참' : '거짓');


// 조건문(if)

const aaaaa = getRandom()

if (aaaaa===0) {
    console.log('aaaaa is 0');
} else if (aaaaa===2) {
    console.log('aaaaa is 2');
} else if (aaaaa===4) {
    console.log('aaaaa is 4');
} else {
    console.log('rest...');
}


// 조건문(Switch)

const aaaaaa = getRandom()

switch (aaaaaa) {
    case 0:
        console.log('switch : aaaaaa is 0');
        break;
    case 2:
        console.log('switch : aaaaaa is 2');
        break;
    case 4:
        console.log('switch : aaaaaa is 4');
        break;
    default:
        console.log('switch : rest...');
        break;
}


// 반복문
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i += 1) {
    const li = document.createElement('li');
    li.textContent = `list-${i + 1}`;
    if ((i + 1) % 2 === 0) {
        li.addEventListener('click',function() {
            console.log(li.textContent);
        })
    }
    ulEl.appendChild(li);
}


// 변수 유효범위

let x = 10;

function foo() {
    let x = 20;
    console.log(x); // 20
}   

foo(); // 20
console.log(x); // 10


// 형 변환  

const y = '10';
const z = 10;

console.log(Number(y) + z); // 20
console.log(String(z) + y); // '1010'


// 함수(선언식, 표현식)

/*
function name(params) {} // 선언식
const name = function(params) {}; // 표현식
*/
function sum (x,y) {
    return (x + y);
}

const xx = sum(1, 2);
const yy = sum(3, 4);
console.log(xx); // 3
console.log(yy); // 7
console.log(xx + yy); // 10