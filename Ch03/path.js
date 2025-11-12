const path = require("path");

// // 경로 연결하기 : join
// const fullPath = path.join("c:\\", "Nodejs", "com", "Ch01", "sample.txt");
// console.log(fullPath);

// // 경로만 추출
// let dir = path.dirname(fullPath);
// console.log(dir);

// console.log(__filename);
// dir = path.dirname(__filename);
// console.log(dir);

// // 파일 이름만 추출 : basename()
// let fn = path.basename(__filename);
// console.log(fn);

// // 확장자만 추출 : extname()
// console.log(path.extname(fn));

// // 경로를 표시하기
// console.log(__filename); // 절대경로 파일이름
// console.log(__dirname); // 절대경로 경로이름
// console.log(path.dirname(__filename)); // 디렉터리 이름

let parsePath = path.parse(__filename); // 절대경로를 객체로 반환
console.log(parsePath);
console.log(parsePath['ext']);
console.log(parsePath.base);