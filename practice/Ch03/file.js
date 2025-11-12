const fs = require('fs');

function writeData(filePath, data) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('파일쓰기 완료');
        }
    });
}

module.exports = writeData;