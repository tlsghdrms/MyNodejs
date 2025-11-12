const fs = require('fs');

const readStream = fs.createReadStream('C:/Intel/Logs/dptf.log');

readStream.on('data', (chunk) => {
    console.log("new chunk reading...");
    console.log(chunk);
});
readStream.on('end', () => {
    console.log('Read end');
});
readStream.on('error', (err) => {
    console.log(err);
});