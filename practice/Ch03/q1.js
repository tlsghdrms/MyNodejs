const fs = require('fs');

if (fs.existsSync('./mine')) {
    console.log('folder already exist');
} else {
    fs.mkdir('./mine', (err) => {
        console.log(err);
    });
}

