console.log("🔸🔸🔸 함수 복습 🔸🔸🔸");
// 함수 복습
function sum(a, b) {
  return a + b;
}

const a = sum(1, 2);
const b = sum(2, 3);

console.log(a); // Output: 3
console.log(b); // Output: 5
console.log(a + b); // Output: 8
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔹🔹🔹화살표 함수🔹🔹🔹");
// 화살표 함수 (arrow function)
// parameter가 1개일 경우 축약형으로 가능
const double = (x) => x * 2;
console.log(double(2)); // Output: 4
// return 값이 object일 경우 ()안에 {}로 작성 해야함
const myAge = (x) => ({ age: x });
console.log(myAge(31)); // Output: { age: 31 }
// parameter가 2개 이상상일 경우의 arrow function
const multiply = (x, y) => {
  return x * y;
};
console.log(multiply(2, 3)); // Output: 6
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔸🔸즉시실행함수(IIFE)🔸🔸");
// 즉시 실행 함수 = 선언과 동시에 실행
// 익명함수 선언문을 ()로 감싸고 ();를 작성
const c = 7;
(function () {
  console.log(c * 2);
})();
// 익명함수 실행문을 ()로 감싸고 ;를 작성
const d = 7;
(function () {
  console.log(d * 2);
})();
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔹🔹🔹 호이스팅 🔹🔹🔹");
// 호이스팅은 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 호이스팅을 이용해서 기명함수를 전체코드의 최하단부에 작성하는 방식을 많이 사용함함
// 기명함수는 호이스팅이 되어 함수 선언문 보다 함수 실행문이 앞에 와도 TypeError가 뜨지 않는다.
const e = "기명함수는 호이스팅 가능";
canHoisting();
function canHoisting() {
  console.log(e);
} // Output: 기명함수는 호이스팅 가능

// 익명함수는 호이스팅이 되지 않아 함수 선언문 보다 함수 실행문이 앞에 오면 TypeError가 뜬다.

const f = "익명함수는 호이스팅 불가능";
// canNotHoisting(); // Output: TypeError: canNotHoisting is not a function
const canNotHoisting = () => {
  console.log(f);
};
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔹🔹🔹타이머 함수🔹🔹🔹");
const hello = document.querySelector("h1");
console.log('3초 후 setTimeout()으로 인해 "Hello world!"가 빨간색으로 변합니다.');
// setTimeout(함수, 시간) : 지정된 시간이 지나면 함수를 실행
const startTimer = setTimeout(() => {
  hello.style.color = "red";
}, 3000);
// clearTimeout(startTimer) : startTimer 취소
console.log('6초 마다 setInterval()로 인해 "Hello world!"가 빨간색,파란색으로 변합니다.');
// setInterval(함수, 시간) : 지정된 시간 간격으로 함수를 실행
const startInterval = setInterval(() => {
  if (hello.style.color === "red") {
    hello.style.color = "blue";
  } else {
    hello.style.color = "red";
  }
}, 6000);
// clearInterval(startInterval) : startInterval 취소
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

// 콜백 함수 : 함수의 인수로 사용되는 함수
console.log("🔸🔸🔸 콜백 함수 🔸🔸🔸");
console.log('3초 마다 setInterval()로 인해 "Hello world!"가 크기가 변합니다.');

function interval(callback) {
  setInterval(() => {
    callback();
  }, 3000);
}

interval(() => {
  if (hello.style.fontSize === "120px") {
    hello.style.fontSize = "10px";
  } else {
    hello.style.fontSize = "120px";
  }
});
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");
