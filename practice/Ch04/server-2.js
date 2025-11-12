const http = require("http");

const server = http.createServer((req, res) => {
    const { method, url } = req;
    res.setHeader("Content-Type", "text/plain");

    if ( method === "GET" && url === "/home") {
        res.end("Welcome home");
    } else if ( method === "GET" && url === "/about") {
        res.end("About us");
    }
});

server.listen(8080, () => {
    console.log("8080포트에서 서버 실행 중");
});