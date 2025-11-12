const fs = require('fs');


// 파일 읽기 : readFile
// let data = fs.readFileSync("./example.txt", "utf8");
// console.log(data);

// fs.readFile('./example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });

// 파일 쓰기 : writeFile
// let data = '\n내용을 추가합니다. \n잘 쓰여졌나요?';

// fs.writeFile('./example.txt', data, { flag: 'a' }, (err) => {
//     if (err) console.log(err);
// });

// 파일 지우기 : unlink

let fname = 'example.txt';

if (fs.existsSync(fname)) {
    fs.unlink(fname, (err) => {
        if (err) console.log(err);
        console.log('Deleted');
    }); 
} else 
    console.log(`${fname}파일이 없습니다.`);

