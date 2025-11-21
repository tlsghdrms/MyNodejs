const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express();
app.use(
    session({
        secret: "secret code", // 세션 비밀 키
        resave: false, // 변경할 내용이 없으면 다시 저장하지 않음
        saveUninitialized: false, // 초기화 되지 않은 세션 저장
        store: MongoStore.create({ mongoUrl: process.env.DB_CONNECT }), // 몽고 DB에 저장
        cookie: { maxAge: 60 * 60 * 24 * 1000 }, // 쿠키 유효 기간 24시간
    })
);

app.get("/", (req, res) => {
    if (req.session.count) { // 세션에 count가 있다면
        req.session.count++; // count 값을 추가하고
        res.send(`${req.session.count}번째 방문입니다.`); // 세션에 저장된 count값 출력
    } else {
        req.session.count = 1;
        res.send("첫번째 방문입니다.");
    }
})

app.listen(5000, () => {
    console.log("서버 실행 중");
});