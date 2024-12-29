console.log("🔹🔹🔹생성자 함수🔹🔹🔹");
// 생성자 함수로 만들어진 객체 데이터 = 인스턴스
function User(name, age) {
  this.name = name;
  this.age = age;
  // 인스턴스 prototype에 공용 method 설정 가능
}
User.prototype.getUserInfo = function () {
  console.log(`${this.name} is ${this.age} years old.`);
};

// User 생성자 함수로 jiyong 인스턴스 생성
const jiyong = new User("jiyong", 31);
jiyong.getUserInfo(); // Output: jiyong is 31 years old.
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔸🔸🔸🔸this🔸🔸🔸🔸");
// 일반 함수는 호출 위치에 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const son = {
  team: "Tottenham",
  nation: "KOR",
  normal: function () {
    console.log(this.team);
  },
  arrow: () => {
    console.log(this.team);
  },
  getNationTimer: function () {
    setTimeout(function () {
      console.log(this.nation);
    }, 3000);
  },
};
son.normal(); // Output: Tottenham
son.getNationTimer(); // Output: undefined (화살표 함수는 this를 자신이 선언된 함수 범위에서 참조)

const kane = {
  nation: "ENG",
  normal: son.normal,
  arrow: son.arrow,
  getNationTimer: function () {
    setTimeout(() => {
      console.log(this.nation);
    }, 3000);
  },
};
kane.normal(); // Output: Byern
kane.arrow(); // Output: undefined
kane.getNationTimer(); // Output: ENG

console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");
console.log("🔹🔹  ES Classese  🔹🔹");
// ES 축약형 메소드
const palmer = {
  team: "chelsea",
  nation: "ENG",
  //일반 함수의 경우 아래와 같이 축약하여 사용 가능
  getTeam() {
    return this.team;
  },
};

// ES6 클래스
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
console.log(salah);
console.log(salah.getTeam());

console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");
console.log("🔸🔸🔸상속(확장)🔸🔸🔸");
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);
//확장
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}
const myBicycle = new Bicycle("삼천리", 2);
const sisterBicycle = new Bicycle("무궁화", 4);
console.log(myBicycle);
console.log(sisterBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
const myCar = new Car("벤츠", 4, true);
const sisterCar = new Car("포르쉐", 4, false);
console.log(myCar);
console.log(sisterCar);

console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");
