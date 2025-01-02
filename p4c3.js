console.log("🔸개요 및 프로젝트 시작🔸");
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔹🔹🔹정규식 생성🔹🔹🔹");
// 생성자 함수(패턴, 옵션)
const regex1 = new RegExp("[a-z]", ""); //[a-z]는 a-z까지 모두 찾는거
// 리터럴 방식9패턴, 옵션)
const regex2 = /[a-z]/gi; // g는 한개이상을 찾는거, i는 대소문자 구분없이 찾는거
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔸🔸 정규식 메소드 🔸🔸");
const lorem = `
    010-1234-5678
    thesecon@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=frozen.
    The quick brown fox jumps over the lazy dog.
    abbcccdddd
    http://localhost:1234
    동해물과_백두산이 마르고 닳도록
    `;
// 정규식.test(문자열) = 정규식에 문자열이 포함되어 있으면 true, 아니면 false
const regex3 = /123/gi;
console.log(regex3.test(lorem));
// 문자열.match(정규식) = 문자열에서 정규식과 일치한 문자의 배열을 반환
console.log(lorem.match(regex3));
// 문자열.replace(정규식,대체문자) = 문자열에서 정규식과 일치한 문자를 대체문자로 교체
console.log(lorem.replace(regex3, "456"));
console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔹🔹🔹플래그(옵션)🔹🔹🔹");
// g - 모든 문자 일치 (global)
// i - 대소문자 구분 무시 (ignore case)
// m - 각각의 줄을 하나의 시작점과 끝점으로 보겠다는 선언 (multi-line)
// | - . 같이 정규식에서 하나의 실행적인 역할을 하는 기호들을 문자로 보겠다는 선언
// $ - 문장의 끝이 $앞에 있는 기호(문자)여야 한다고 선언
console.log(lorem.match(/\?/gim));
console.log(lorem.match(/\?$/gim));
console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔸🔸 패턴(표현)(1) 🔸🔸");
// ^ab = 줄 시작에 있는 ab와 일치
// ab& - 줄 끝에 있는 ab와 일치
// . - 임의의 한 문자와 일치
console.log(lorem.match(/c.m/g));
// a|b - a 또는 b와 일치
console.log(lorem.match(/jiyong|com/));
console.log(lorem.match(/jiyong|com/g));
// ab? - b가 없거나 b와 일치
console.log(lorem.match(/https/g));
console.log(lorem.match(/https?/g));
// {3} - 3개 연속 일치
console.log(lorem.match(/b{2}/g));
// [3,} - 3개 이상 연속 일치
console.log(lorem.match(/b{2,}/g));
// {3,5} - 3~5개 연속 일치
console.log(lorem.match(/b{2,4}/g));
// \w - 숫자를 포함한 영어 알파벳
console.log(lorem.match(/\w{2,3}/g));
// \b\w{2,3}\b - 앞 뒤 특수문자를 기준삼아 2~3글자의 숫자+알파벳 조합
console.log(lorem.match(/\b\w{3,4}\b/g));

console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");

console.log("🔹🔹 패턴(표현)(2) 🔹🔹");
// [abc] - a, b, c 중 한 문자와 일치
// [a-z] - a-z까지 문자와 일치
// [A-Z] - A-Z까지 문자와 일치
// [0-9] - 0-9까지 문자와 일치
// [가-힣] - 가-힣까지 문자와 일치
console.log(lorem.match(/[가-힣]{1,}/g));

// \w 영문+숫자+언더바 중 하나와 일치
// \b 영문+숫자+언더바와 불일치
// \d 숫자와 일치
// \s 공백(space, tab)과 일치
console.log(lorem.match(/\bf\w{1,}/g));
console.log(lorem.match(/\d{1,}/g));
console.log(lorem.replace(/\s/g, ""));

// (?=) - 앞쪽 일치
// (?<=) - 뒤쪽 일치
console.log(lorem.match(/.{1,}(?=@)/g));
console.log(lorem.match(/(?<=\@).{1,}/g));

console.log("🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹");

("▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️");
