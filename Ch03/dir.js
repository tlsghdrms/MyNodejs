const fs = require('fs');
const path = require('path');

// // 동기화
// let dir = fs.readdirSync('./');
// console.log(dir);
// console.log(path.extname(dir[0]));

// 비동기화(콜백)
fs.readdir('./', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(`콜백 : ${data}`);
});
