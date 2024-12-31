import _ from 'lodash';
import axios from 'axios'

console.log("🔸🔸가져오기,내보내기🔸🔸");
/* 기본통로로 export 하기 ( 1파일당 1개의 변수만 설정가능)
✅ export default 익명데이터: 데이터에 이름을 설정하지 않아도 된다.
    예시1) export default function (x) {console.log(x);}
*/

/* 기명통로로 export 하기 ( 1파일당 1개 이상의 변수 설정가능)
✅ export 기명데이터 : 데이터에 이름을 설정해야 한다.
    예시1) export function 변수명(x) {console.log(x);};
    예시2) export const year = 2025;
*/

// 1개의 파일에서는 1개의 기본통로와 여러개의 기명통로로 export하는 변수를 생성할 수 있다.

/* import 하기
✅ 기본통로의 데이터 import 하기
    예시1) import 임의변수명 from '파일경로';  // 임의변수명은 마음대로 지을 수 있다.
✅ 기명통로의 데이터 import 하기
    예시1) import { 변수명1, 변수명2 } from '파일경로'; // 기명데이터의 변수명을 그대로 사용하여야 한다.
    예시2) import { 변수명1 as 임의변수명 } from '파일경로'; // as를 사용하여 변수명을 마음대로 지을 수 있다. 
    예시3) import * from '파일경로'; // '*'를 사용하여 모든 데이터를 import할 수 있다.
    예시4) import * as 임의 변수명 from '파일경로'; // as를 사용하여 변수명을 마음대로 지을 수 있다.
*/
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔹🔹 Lodash 사용법 🔹🔹");
// lodash의 메소드
// ✅ _.uniqBy(arr,속성) => 배열안에 중복된 속성 값들을 제거하여 새로운 배열을 반환
  const group1 = [{id: 1, name: 'ali'},{id: 2, name:'bli'}];
  const group2 = [{id: 1, name: 'ali'},{id: 3, name:'cli'}];
  const group3 = group1.concat(group2) 
  // group3: [{id: 1, name: 'ali'}, {id: 2, name: 'bli'}, {id: 1, name: 'ali'}, {id: 3, name: 'cli'}];
  console.log(_.uniqBy(group3,'id')); 
  // Output: [{id: 1, name: 'ali'}, {id: 2, name: 'bli'}, {id: 3, name: 'cli'}];

// ✅ _.unionBy(arr1, arr2, 속성) => 여러 배열안에 중복된 속성 값을 미리 제거하여 새로운 배열을 반환
const group4 = _.unionBy(group1, group2, 'id')
console.log(group4);

// ✅ _.find(arr,조건) => arr안에서 조건을 만족하는 첫번째 요소를 반환
const find = _.find(group1, {id: 1});
console.log(find);

// ✅ _.findIndex(arr,조건) => arr안에서 조건을 만족하는 첫번째 요소의 index를 반환
const findIndex = _.findIndex(group1, {id: 1});
console.log(findIndex);

// ✅ _.remove(arr,조건) => arr안에서 조건을 만족하는 요소를 제거하여 새로운 배열을 반환
_.remove(group1, {id: 2});
console.log(group1);

console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔸🔸🔸🔸 JSON 🔸🔸🔸🔸");
// ✅ .json 파일에선 string, number, boolean, null, {},[] 데이터만 사용한다. (undefined XXX)
// ✅ .json 파일에선 string을 큰따옴표로만 표현한다.
// ✅ .json 파일에선 객체 안의 key를 큰따옴표로 표현한다.
// ✅ .json 파일에 작성되는 모든것은 'String' 형태이고, 그것이 js 파일에 해석되면서 'Object' 형태로 변한다.
// ✅ JSON.stringify(obj) ➡️ js의 obj를 JSON의 string 형태로 변환
// ✅ JSON.parse(jsonStr) ➡️ JSON의 문자열을 js의 obj 형태로 변환
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔹🔹🔹 Storage 🔹🔹🔹");
// Browser → 'F12' → Application → Local Storage / Session Storage 
// localStorage에 데이터 저장하기 (setItem)
const user = { 
  name: 'ali',
  age: 31,
  emails: [
    'email1@example.com',
    'email2@example.com'
  ]
}
// localStorage.setItem('key', 'value');
localStorage.setItem('user', JSON.stringify(user)); // value는 문자데이터로 저장되어야 해서 JSON.stringify()로 object를 string으로 변환

// localStorage에 데이터 가져오기 (getItem)
// localStorage.getItem('key'); 
localStorage.getItem('user'); // localStorage value는 string이므로 JSON.parse()로 object로 변환

// localStorage에 데이터 제거하기 (removeItem)
// localStorage.removeItem('key')
// localStorage.removeItem('user')

// localStorage에 데이터 수정하기
const str1 = localStorage.getItem('user') // localStorage의 수정할 데이터의 key를 이용해 value를 가져온다.
const obj1 = JSON.parse(str1) // 가져온 value를 object로 변환
obj1.age = 22; // object의 property를 수정
localStorage.setItem('user', JSON.stringify(obj1)); // 수정한 object를 다시 string으로 변환하여 저장
// 'lowdb'를 활용하여 이 과정을 더 쉽게 구현할 수 있음.

// localStorage는 반영구적, sessionStorage는 일시적
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

'▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️'

console.log("🔸🔸🔸 OMDb API 🔸🔸🔸");
  // OMDB API는 영화정보를 요청할 수 있는 API
  // APIKEY탭에서 APIKEY를 발급받고 ? 는 
  // 도메인의 쿼리스트링 (쿼리는 검색이라는 뜻으로 이해)
  // 도메인의 ?는 쿼리스트링의 시작부분을 의미
  // 도메인의 &는 도메인 parameter의  구분을 의미
  // https://www.omdbapi.com/?apikey=7035c60c&s=frozen → json 문법이 적혀있는 페이지 출력됨
  // axios 패키지를 활용하여 json 페이지를 main.js에서 처리할 수 있도록 할거임
  // 'npm i axios'
  function fetchMovies() {
    axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((response) => {
      console.log(response);
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = response.data.Search[0].Title;
      imgEl.src = response.data.Search[0].Poster;
    })
    }
  fetchMovies();


console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");