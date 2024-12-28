🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸

### ✅ **_About Node JS_**

#### ➡️ Node js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript런타임.

#### ➡️ 패스트캠퍼스 '한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.'의 'Part3'의 'Ch1. Node.js' 강의 내용임.

🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸  
 0️⃣ 설치방법

- <a href="https://github.com/coreybulter/nvm-windows" title="Github로 이동" target="_blank"> github.com/coreybulter/nvm-windows</a> 링크로 접속
- Download 버튼이 보일때 까지 스크롤 후 Download 클릭!
- 'nvm-setup.zip' 다운로드 후 압축 해제 및 설치 진행
- 'Visual Studio Code'를 실행하고 터미널 On
- 터미널에 **'nvm --version'** 를 입력 (nvm version 체크)
- 터미널에 **'nvm install 12.14.1'** 를 입력 (nvm 최신버전 확인 후 최신 짝수 LTS 버전의 넘버를 입력)
- 터미널에 **'nvm use 12.14.1'** 를 입력 (nvm 12.14.1 버전을 사용하겠다는 선언)
- 터미널에 **'nvm ls'** 를 입력 (nvm version list 확인 및 내 version 확인)
- 터미널에 **'node --version'** 를 입력 (이때 'nvm --version'과 같은 version이 나와야함)  
  = _**'nvm uninstall 12.14.1' = 리스트에서 버전 삭제**_
- 터미널에 **'npm init -y'** 를 입력 (package.json 파일 생성)
- 터미널에 **'npm i parcel-bundler -D'** 를 입력 (node\*modules 폴더와 package-lock.json 파일 생성)  
  = **\*'parcel-bundler'는 개발서버를 열어주는 기능**_  
  = _**'npm i 모듈명@버전'는 모듈(package)의 구버전을 설치 할 수 있음**_  
  = _**'npm info 모듈명'는 모듈(package)의 최신버전을 확인 할 수 있음**_  
  = _**'npm update 모듈명'는 모듈(package)의 최신버전으로 업데이트 할 수 있음**\_  
   **_(단, package.json파일에 해당 모듈의 버전에 Caret(^)이 표기 되어 있을 경우만 해당함)_**
- **'package.json'**의 **"script"** 객체 내부를 비우고 **"dev": "parcel index.html",** 추가
- **'package.json'**의 **"script"** 객체 내부에 **"build": "parcel build index.html"** 추가  
  = _**'build'는 우리 브라우저가 우리의 프로젝트를 해석할 수 있도록 코드난독화를 함**_
- 터미널에 **'npm run dev'** 를 입력함으로써 개발용 서버 실행 가능
- 터미널에 **'npm run build'** 를 입력함으로써 브라우저가 프로젝트를 해석할 수 있도록 빌드드
- **'.gitignore'** 파일 생성 후 **'.cache/'**, **'dist/'**, **'node_modules/'** 등을 입력  
  <br/>

1️⃣ Version의 유의적 의미

- 12.14.1 (Major.Minor.Patch)  
  = Major는 기존버전과 호환되지 않는 새로운 버전  
  = Minor는 기존버전과 호환되는 새로운 기능이 추가된 버전  
  = Patch는 기존버전과 호환되는 버그 및 오타 등이 수정된 버전
- ^12.14.1 (Caret 기호)  
   = Major 버전 안에서 가장 최신 버전으로 업데이트 가능  
  <br/>

2️⃣ NPM 프로젝트(예제)의 패키지 버전 일치시키기

- 현시점 모듈 버전과 강의 촬영 시점 모듈 버전이 다름으로 인한 모듈 구현에 오류가 생길 수 있음.  
   해당 오류를 예방하기 위해서 아래와 같은 절차를 진행해야함.
  - <a href="https://github.com/ParkYoungWoong?tab=repositories" title="Github로 이동" target="_blank">https://github.com/ParkYoungWoong?tab=repositories</a> 로 이동해서 해당 강의 repository 클릭
  - repository에서 **'package.json'** 을 클릭
  - 본문 우측 상단 **'Raw'** 버튼을 ctrl + 클릭
  - 새창을 우클릭 → 강의 폴더에 다른이름으로 저장
  - **'package-lock.json'** 도 동일한 방식으로 진행
  - Visual Studio Code 터미널에서 **'npm i'** 입력  
    <br/>

---

🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹

### ✅ **_About JavaScript_**

#### ➡️ 패스트캠퍼스 '한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.'의 'Part3'의 'Ch2. JS시작하기' 강의 내용임.

🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹  
0️⃣ 데이터 타입 확인

- type of 방식
  - 'type of' 는 데이터의 타입을 반환해줌
  - 'null', '{}', '[]' 은 'object' 값으로 반환해줌
- function getType(data) {} 방식
  - type of 방식의 문제점을 해결하기 위해 getType 함수를 만들고 그 안의 로직을 작성
  ```javascript
  function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
  }
  console.log(getType(null)); // null
  console.log(getType({})); // object
  console.log(getType([])); // array
  ```
- getType.js 에서 getType 메소드를 main.js 에서 import 하기
  - getType.js에서 export default getType(){}
  ```javascript
  export default getType(data) {
    return Object.prototype.toString.call(data).splice(8,-1);
  }
  ```
- main.js 에서 import getType from './getType.js'

  ````javascript
  import getType from './getType.js

      console.log(getType(123));
      ```

  <br/>
  ````

1️⃣ 산술, 할당 연산자

- 산술 연산자 종류
  - \+
  - \-
  - \*
  - /
  - %
- 할당 연산자 종류 - = - += - -= - \*= - /= - %=  
  <br/>

2️⃣ 비교, 논리 연산자

- 비교 연산자 종류
  - <, >
  - <=, =>
  - ==, !=
  - ===, !==
- 논리 연산자 종류 - && (피연산 값이 모두 true 일 때 true) - || (피연산 값중 한개라도 true 일 때 true) - ! (피연산 값이 true 일 때 false, 피연산 값이 false 일 때 true)  
  <br/>

3️⃣ 삼항 연산자

- 삼항 연산자 종류 - data ? '참' : '거짓' (data가 true 일 때 '참', data가 false 일 때 '거짓')  
  <br/>

4️⃣ 조건문 If else

- 0~9까지 랜덤한 숫자를 반환해주는 random 함수가 있다고 가정
- if문 조건이 참 일 경우 if의 실행문 실행, 거짓 일 경우 else if문으로 이동
  else if문 조건이 참 일 경우 else if의 실행문 실행, 거짓 일 경우 다음 else if문으로 이동
  모든 조건이 거짓일 경우 else문 실행

```javascript
if (random() === 0) {
  console.log("random is 0");
} else if (random() === 2) {
  // random() === 2일 때 {} 실행문 실행, 2가 아니면 else if문으로 넘어감
  console.log("random is 2");
} else if (random() === 4) {
  // random() === 4일 때 {} 실행문 실행, 4가 아니면 else문으로 넘어감
  console.log("random is 4");
} else {
  // random() === 0, 2, 4가 아닐 때 {} 실행문 실행
  console.log("random is not 0, 2, or 4");
}
```

<br/>

5️⃣ 조건문 Switch

- 0~9까지 랜덤한 숫자를 반환해주는 random 함수가 있다고 가정
- switch문의 조건의 값에 맞는 case로 이동 (각 case내부에는 break 작성),  
  값과 일치하는 case가 없을경우 case문 제일 하단부 default로 이동

```javascript
switch (random()) {
  case 0:
    console.log("random is 0");
    break;
  case 2:
    console.log("random is 2");
    break;
  case 4:
    console.log("random is 4");
    break;
  default:
    console.log("random is not 0, 2, or 4");
    break;
}
```

<br/>

6️⃣ 반복문 For

- for ( 시작조건; 종료조건; 변화조건 ) {}

```javascript
for (let i = 0; i < 3; i += 1) {
  console.log(`now i value is ${i}`);
}
// i가 0일때, 실행문이 한번 실행 된 후 i의 값에 1이 더해져 i가 1이 됨
// i가 1일때, 실행문이 한번 실행 된 후 i의 값에 1이 더해져 i가 2가 됨
// 위처럼 반복 작업을 하다가, i의 값이 3보다 작지 않을 때, 반복문이 종료됨
```

<br/>

7️⃣ 변수 유효범위(Scope)

- let, const 는 지역변수로써 자신이 선언된 블록 내에서만 유효함 (블록레벨)  
  <br/>

8️⃣ 형(Type) 변환

- Truthy
  - true, {}, [], 1, 2, 'false', -12, '3.14' ...
- Falsy - false, '', null, undefined, 0, -0, NaN  
  <br/>

---

🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸

### ✅ **_About JavaScript_**

#### ➡️ 패스트캠퍼스 '한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.'의 'Part3'의 'Ch3. JS함수' 강의 내용임.

🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸  
0️⃣ 함수

- 기명함수, 익명함수로 나뉜다
- 반복되는 함수는 변수에 담아서 사용하는것이 좋다

```javascript
function sum(a, b) {
  return a + b;
}
const a = sum(1, 2);
const b = sum(2, 3);
console.log(a);
console.log(b);
console.log(a + b);
```

- 함수 블록 내에서 return 이후에 작성된 실행문은 실행되지 않는다.  
  <br/>

1️⃣ 화살표 함수(Arrow function)

- parameter가 1개일 경우 축약형 Arrow function 사용 가능

```javascript
const double = (x) => x * 2;
console.log(double(3)); // 6
```

- return 값이 object일 경우 ()안에 {}로 작성 해야함

```javascript
const myAge = x => ({age: x};);
console.log(myAge(31));
```

- parameter가 2개 이상일 경우의 Arrow function

```javascript
const multiply = (x, y) => {
  return x * y;
};
```

<br/>

2️⃣ 즉시 실행 함수 (IIFE)

- ① 익명함수 선언문을 ()로 감싸고 ()를 한번 더 사용 후 ; 작성
- (function)();

```javascript
const c = 7;
(function () {
  console.log(c * 2);
})();
```

- ② 익명함수 실행문을 ()로 감싼 후 ; 작성
- ((funtion)());

```javascript
const c = 7;
(function () {
  console.log(c * 2);
})();
```

<br/>

3️⃣ 호이스팅 (Hoisting)

- 호이스팅은 함수 선언부가 유효범위 최상단으로 끌어올려 읽혀지는 현상
- 호이스팅을 이용하여 기명함수를 전체코드의 최하단부에 작성하는 방식을 많이 선호함
- 기명함수는 호이스팅 O

```javascript
const e = "기명함수는 호이스팅 가능";
canHoisting();
function canHoisting() {
  console.log(e);
} // Output: 기명함수는 호이스팅 가능
```

- 익명함수는 호이스팅 x

```javascript
const f = "익명함수는 호이스팅 불가능";
canNotHoisting(); // Output: TypeError: cannotHoisting is not a function
const canNotHoisting = () => {
  console.log(f);
};
```

<br/>

4️⃣ 타이머 함수

- setTimeout(함수, 3000)

  - 3초 후 function 실행

  ```javascript
  const timer = setTimeout(() => {
    console.log("3초 후 실행");
  }, 3000);
  ```

- clearTimeout(setTimeout);

  - 설정 된 setTimeout() 취소

  ```javascript
  setTimeout(timer);
  ```

- setInterval(함수, 3000)

  - 3초 간격으로 함수 실행

  ```javascript
  const interval = setInterval(() => {
    console.log("3초 간격 실행");
  }, 3000);
  ```

- clearInterval(setInterval);
  - 설정 된 setInterva() 취소
  ```javascript
  clearInterval(interval);
  ```
  <br/>

5️⃣ 콜백 함수

- 함수의 인수로 사용되는 함수

  ```javascript
  function interval(callback) {
    console.log("지금부터 콜백함수가 시작됩니다.");
    setInterval(() => {
      callback();
    }, 3000);
  }
  interval(() => {
    console.log("callback function called");
  });
  ```

  <br/>

---

🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸

### ✅ **_About JavaScript_**

#### ➡️ 패스트캠퍼스 '한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.'의 'Part3'의 'Ch4. JS클래스' 강의 내용임.

🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸  
0️⃣ 생성자 함수

- 생성자 함수로 만들어진 객체 데이터 = 인스턴스
- 모든 인스턴스엔 prototype 속성이 있고, prototype 속성에 공용 method를 설정 할 수 있다.

  ```javascript
  // 생성자 함수 선언
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  // 공용 method를 prototype에 추가
  User.prototype.getUserInfo = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
  // 생성자 함수로 인스턴스 생성
  const jiyong = new User("jiyong", 31);
  // 인스턴스 prototype의 공용 method 호출
  jiyong.getUserInfo(); // Output: jiyong is 31 years old
  ```

      <br/>

1️⃣ this

- 일반 함수는 호출 위치에 따라 this가 정의됨.

  ```javascript
  const chelsea = {
    color: "blue",
    getColor: function () {
      console.log(this.color);
    },
    getColorTimer: function () {
      setTimeout(function () {
        console.log(this.color);
      }, 3000);
    },
  };
  chelsea.getColor(); // Output: blue
  // chelsea 객체가 getColor 함수를 호출
  // getColor 함수 내부의 this는 getColor를 호출한 chelsea 객체에서 color를 찾음
  chelsea.getColorTimer(); // Output: undefined
  // chelsea 객체가 getColorTimer() 함수를 호출
  // getColorTimer는 setTimeout() 함수임
  // setTimeout 함수가 콜백함수 호출
  // 콜백함수 내부의 this는 콜백함수를 호출 한 setTimeout 함수에서 color를 찾음
  ```

- 화살표 함수는 화살표 함수가 선언 된 함수의 유효범위에서 this가 정의됨.

  ```javascript
  const arsenal = {
    color: "red",
    getColor: () => {
      console.log(this.color);
    },
    getColorTimer: function () {
      setTimeout(() => {
        console.log(this.color);
      }, 3000);
    },
  };
  arsenal.getColor(); // Output: undefined
  // arsenal 객체가 getColor 함수를 호출
  // getColor 함수 내부의 this는 getColor 함수가 선언 된 함수의 유효범위에서 color를 찾으나 getColor 함수는 arsenal 객체에 선언되었고, 함수에 선언된 것이 아님  즉 getColor 함수가 선언된 함수를 못찾음 undefined
  arsenal.getColorTimer(); // Output: red
  // arsenal 객체가 getColorTimer 함수를 호출
  // getColorTimer 함수는 setTimeout 함수임
  // setTimeout 함수가 콜백함수를 호출
  // 콜백함수 내부의 this는 콜백함수가 선언 된 setTimeout 함수(즉, getColorTimer)의 유효범위에서 color를 찾음
  ```

<br/>

2️⃣ ES6 Classes

- ES6 축약형 메소드

  ```javascript
  const palmer = {
    team: "chelsea",
    nation: "ENG"
    //축약형 메소드
    getTeam() {
      return this.team;
    }
  }
  ```

- class 정의

  ```javascript
  class Player {
    constructor(team, nation) {
      this.team = team;
      this.nation = nation;
    }
    getTeam() {
      return this.team;
    }
  }

  const salah = new Player("Liverpool", "EGY");
  console.log(salah.getTeam());
  ```

<br/>

3️⃣ 상속(확장)

- extends 를 사용하여 클래스간의 상속을 시킬 수 있음

  ```javascript
  class Vehicle {
    constructor(name, wheel) {
      this.name = name;
      this.wheel = wheel;
    }
  }
  const myVehicle = new Vehicle("운송수단", 2);
  // 확장 (extends)
  class Bicycle extends Vehicle {
    constructor(name, wheel, madeInKorea) {
      super(name, wheel);
      this.madeInKorea = madeInKorea;
    }
  }
  const myBicycle = new Bicycle("두발", 2, true);
  const broBicycle = new Bicycle("네발", 4, false);
  ```

  <br/>
