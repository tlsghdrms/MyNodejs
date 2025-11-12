// 1. 함수 선언 기본방법
// 함수 선언
// function greeting(name) {
//     console.log(`${name}님, 안녕하세요?`);
// }

// // 함수 호출
// greeting("신홍근");


// //2. 함수 이름없이 변수에 할당
// // 함수 선언
// const greeting = function(name) {
//     console.log(`${name}님, 안녕하세요?`);
// }

// // 함수 호출
// greeting("신홍근");

// // 3. 함수를 선언하고 동시에 실행
// (function (a, b) {
//     console.log(`두 수의 합: ${a + b}`);
// })(100, 200);

// 4. 화살표 함수 선언
let hi = () => '안녕하세요?';
console.log(hi());


// 매개변수가 있는 화살표 함수 선언
let sum = (a, b) => a + b;
console.log(sum(100, 200));

let min = (a, b) => a - b;
console.log(min(100, 200));

let mul = (a, b) => a * b;
console.log(mul(100, 200));

let div = (a, b) => a / b;
console.log(div(100, 200));

