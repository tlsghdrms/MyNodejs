const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res) => {
    res.send("Welcome!");
});

app.get("/about",(req, res) => {
    res.send("This is the about page.");
});

app.get(["/square/:num", "/square"], (req, res) => {
    const num = Number(req.params.num);
    if(!isNaN(num)) {
        res.send(`제곱한 숫자: ${num*num}`);
    } else {
        res.status(400).send("숫자를 입력하세요");
    }
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});