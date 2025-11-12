const express = require("express");
const app = express();
const port = 3000;

// logger 미들웨어 정의
const logger = (req, res, next) => {
    console.log("User logged");
    next(); // 다음 미들웨어 호출
};

// requestTime 미들웨어 정의
const requestTime = (req, res, next) => {
    let today = new Date();
    let now  = today.toLocaleTimeString();
    req.requestTime = now;
    next();
};

// app.get("/", (req, res) => {
//     console.log("요청 발생");
// });

// 일반 미들웨어 등록
app.use(logger);
app.use(requestTime);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 미들웨어 등록
app.route("/")
.get((req, res) => {
    console.log("Hello Node");
    const resText = `요청 시간: ${req.requestTime}`;
    res.setHeader("Content-Type", "text/plain");
    res.send(resText);
});
app.use("/contacts", require("./routes/contactRoutes"))

// 오류 미들웨어 등록

// 서버 실행행
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});