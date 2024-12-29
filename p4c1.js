console.log("🔹🔹🔹🔹 문자 🔹🔹🔹🔹");
// 생성자를 통하지 않고 데이터를 생성하는 방식을 리터럴 방식 (",',`,{}.[]...)
// String: "", '', ``  
const str = " jiyong0419@naver.com ";
console.log(str.indexOf("naver")); // naver가가 몇번째 칸에 있는 단어인지 확인확인
console.log(str.length); // 문자열의 길이 확인
console.log(str.slice(3,7)); // 첫번째 번호칸부터 두번째 번호칸 앞 문자열 자르기
console.log(str.replace('jiyong0419','wlfyd0419')); // 첫번째 인수를 두번째 인수로 교체
console.log(str.match(/.+(?=@)/)); // 정규표현식을 통해서 특정 문자를 일치시켜서 그것을 배열데이터로 반환
console.log(str.match(/.+(?=@)/)[0]); 
console.log(str.trim()); // 문자열의 맨 앞,뒤 공백을 제거
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔸🔸🔸숫자와 수학🔸🔸🔸");
// Number: 123, 12.3, 0o10, 0x10
const pi = 3.14159265358979;
console.log(pi.toFixed(2)); // 인수에 맞게 소수점 자리 수 표현, 반환값은 string이 됨
console.log(parseInt("3.14abc")); // 정수로 변환 (인수에 문자열이 끼어있을 시 문자열은 삭제된 채 반환)
console.log(parseFloat("3.14abc")); // 실수로 변환 (인수에 문자열이 끼어있을 시 문자열은 삭제된 채 반환)
console.log('abs: ', Math.abs(-12)); // 인수의 절대값을 반환
console.log('min: ', Math.min(4,15,33)); // 인수 중 가장 작은 값을 반환
console.log('max: ', Math.max(4,15,33)); // 인수 중 가장 큰 값을 반환
console.log('ceil: ', Math.ceil(3.14)); // 인수를 정수단위로 올림처리
console.log('floor: ', Math.floor(3.14)); // 인수를 정수단위로 내림처리
console.log('round: ', Math.round(3.14)); // 인수를 정수단위로 반올림처리
console.log('random: ', Math.random()); // 0~1 사이의 무작위 실수 반환
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔹🔹🔹🔹배열(1)🔹🔹🔹🔹");
// 배열은 여러 아이템(요소)를 가지는 데이터 구조, 아이템의 순서는 index라고 함)
const numbers = [1,2,3,4,5];
const fruits = ['Apple','Banana','Cherry'];

console.log(numbers.length); // 배열의 요소 개수를 반환, 빈 배열은 0을 반환
console.log(numbers.find( item => item > 3)); // 배열을 순회하여 조건함수를 만족하는 첫 번쨰 요소를 반환
console.log(numbers.concat(fruits)); // 기존배열과 인수 배열을 결합하여 새로운 배열을 반환 (원본 배열은 그대로)
numbers.forEach((item, index, array) => console.log(item,index,array)) 
// forEach는 배열을 순회하며 실행문을 실행, 반환값은 없음
const mapObjResult = numbers.map((item, index) => ({id: index, name: item}));
console.log(mapObjResult);
// map은 배열을 순회하며 실행문을 실행하여 값을 새로운 배열로 반환
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔸🔸🔸🔸배열(2)🔸🔸🔸🔸");
const odds = [1,3,5,7,9];
const evens = [2,4,6,8];

const filterResult = odds.filter(item => item < 5) //배열을 순회하며 조건함수를 만족하는 요소만 새로운 배열로 반환
console.log(filterResult);

const findResult = odds.find(item=> /^7/.test(item)); // 배열을 순회하며 조건함수를 만족하는 첫번째 요소를 반환
console.log(findResult);

const findIndexResult = odds.findIndex(item=> /^7/.test(item)); //배열을 순회하며 조건함수를 만족하는 첫번째 요소의 index를 반환
console.log(findIndexResult);

const includesResult = odds.includes(7); // 배열에 특정 요소가 존재하는지 boolean으로 반환
console.log(includesResult);

evens.push(10); // 배열의 맨 뒤에 요소를 추가, 원본이 수정됨
console.log(evens);

evens.unshift(0); // 배열의 맨 앞에 요소를 추가, 원본이 수정됨
console.log(evens);

evens.reverse(); // 배열의 순서를 반전, 원본이 수정됨
console.log(evens);

evens.splice(2, 3, 999) // 배열의 첫번째 인수부터 두번째 인수 개수만큼 요소를 삭제, 이후 세번째 인수를 끼워 넣음, 원본이 수정됨
console.log(evens);
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔹🔹🔹🔹 객체 🔹🔹🔹🔹");
const citizen = {
  //key: value
  name: "Jiyong",
  age: 31,
}
const citizenEmail = {
  name: "Jiyong",
  email: "jiyong@naver.com",
}
//Object의 정적(static) 메소드
const assign = Object.assign(citizen, citizenEmail); // 첫번째 인수 객체에 나머지 인수 객체를 덮어쓰기
const assign2 = Object.assign({}, citizen, citizenEmail); // 새로운 메모리주소에 두 인수 객체를 병합한 데이터가 들어감
console.log(assign);

const keys = Object.keys(citizenEmail); // 객체의 key를 배열로 반환
console.log(keys);
console.log(citizenEmail['name']); // key를 index로 접근할 수 있음
const values = keys.map(key => citizenEmail[key] || 'Not Found'); // key가 존재하지 않을 경우 'Not Found' 반환
console.log(values);
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔸🔸 구조 분해 할당 🔸🔸");
const person = {
  name: "Jeon,jiyong",
  age: 31,
  email: "jiyong@naver.com",
}
// 구조분해 할당 기본 형태(객체)
// key1:key2는 변수명 변경, key1 = default는 변수의 기본값 설정
const { name, age:korAge, email="no mail", address="Korea", gender} = person;
console.log(name, korAge, email, address, gender);

// 구조분해 할당 기본 형태(배열)
const food = ['피자', '햄버거', '김밥'];
const [a,b,c,d] = food;
console.log(a,b,c,d); // Output: "피자" "햄버거" "김밥" undefined
// 햄버거만 추출하고 싶을때
// const [,b] = food; 
// console.log(ba);// Output: "햄버거"
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔹🔹🔹전개 연산자🔹🔹🔹");
// 전개연산자는 배열의 아이템들을 쉼표로 구분하여 나열
const spread = ['ali','bli','cli','dli','eli']
console.log(spread); // Output: ["ali", "bli", "cli", "dli", "eli"]
console.log(...spread); // Output: ali bli cli dli eli → console.log('ali','bli','cli','dli','eli') 와 같다.

function toObject(a, b, c) {
  return {
    a, // a: a,
    b, // b: b,
    c, // c: c,
  }
}
console.log(toObject(...spread)); // Output: { a: 'ali', b: 'bli', c: 'cli' } → console.log(toObject(spread[0],spread[1],spread[2]) 와 같다.

// Rest parameter는 나머지 배열의 아이템을 전달 받아 배열로 묶는다.
const toObject2 = (a, b, ...c) => ({a, b, c})
console.log(toObject2(...spread)); // Output: { a: 'ali', b: 'bli', c: ['cli', 'dli', 'eli'] }
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔸🔸🔸🔸불변성🔸🔸🔸🔸");
// 원시 데이터: Number, String, Boolean, Symbol, undefined, null
let var1 = '1번 메모리주소' // var1은 '1번 메모리주소'를 참조한다.
let var2 = '2번 메모리주소' //var2는 '2번 메모리주소'를 참조한다.
console.log(var1 === var2); // Output: false
var1 = var2; // var2가 var1의 메모리주소를 참조한다.
console.log(var1 === var2); // Output: true
let var3 = '1번 메모리주소' // var3 또한 '1번 메모리주소'를 참조한다.
console.log(var1 === var2 === var3);

// 참조형 데이터: Array, Object, Function
let var4 = { memory: 4}; // var4는 '4번 메모리주소'를 참조한다.
let var5 = { memory: 4}; // var5는 '5번 메모리주소'를 참조한다.
console.log(var4 === var5); // Output: false
var4 = var5 // var5는 var4의 메모리 주소를 참조한다.
var4.memory = 100; // var4의 property가 변하면 var5의 property도 변한다.
console.log(var4 === var5); // Output: true
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔹  얕은복사, 깊은복사  🔹");
// 참조형 데이터(Object, Array, Function)를 같은 '메모리 주소'를 참조하지 않게 복사할 경우 사용하는 방식이 2가지 있다.
// 참조형 데이터 내부에 또 다른 참조형 데이터가 존재할땐 깊은복사가 안전하다.

// 얕은복사1 (변수가 참조하는 '메모리 주소'만 다르고 '메모리 주소'내부에 또 다른 참조형 데이터가 있다면 해당 참조형 데이터의 '메모리 주소'는 같음)
// obj1은 '1', obj1의 phone property는 '1-1'의 '메모리 주소'에 담김.
const obj1 = { name: 'Chelsea', age: 85, phone:['010-1234-5678']} 
// obj2는 '2', obj2의 phone property는 '1-1'의 '메모리 주소'를 참조한다. 즉, obj1.phone 가 변하면 obj2.phone도 변한다.
const obj2 = Object.assign({}, obj1) 
console.log(obj1); // Output: { name: 'Chelsea', age: 85, phone: ['010-1234-5678'] }
console.log(obj2); // Output: { name: 'Chelsea', age: 85, phone: ['010-1234-5678'] }
console.log(obj1 === obj2); // false  →  각 변수가 참조하는 '메모리 주소'가 다름
console.log(obj1.phone === obj2.phone); // true → obj1.phone과 obj2.phone의 메모리 주소가 같음


// 얕은복사2 (변수가 참조하는 '메모리 주소'만 다르고 '메모리 주소'내부에 또 다른 참조형 데이터가 있다면 해당 참조형 데이터의 '메모리 주소'는 같음)
// obj3은 '3', obj3의 phone property는 '3-1'의 '메모리 주소'에 담김.
const obj3 = { name: 'Chelsea', age: 85, phone:['010-1234-5678']} 
// obj4는 '4', obj4의 phone property는 '4-1'의 '메모리 주소'를 참조한다. 즉, obj3.phone 가 변하면 obj4.phone도 변한다.
const obj4 = {...obj3}
console.log(obj3); // Output: { name: 'Chelsea', age: 85, phone: ['010-1234-5678'] }
console.log(obj4); // Output: { name: 'Chelsea', age: 85, phone: ['010-1234-5678'] }
console.log(obj3 === obj4); // false  →  각 변수가 참조하는 '메모리 주소'가 다름
console.log(obj3.phone === obj4.phone); // true → obj3.phone과 obj4.phone의 메모리 주소가 같음

//깊은복사
// lodash를 사용하여 깊은복사를 구현한다.
// 1. 'npm i lodash'
// 2. js파일 상단에 import _ from 'lodash';
// 3. const obj2 = _.cloneDeep(obj1)
// obj2 === obj1 → false
// obj2.phone === obj1.phone → false
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");