const http = require("http");


const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!");
});

server.listen(8080, () => {
    console.log("8080포트에서 서버 실행 중");
});