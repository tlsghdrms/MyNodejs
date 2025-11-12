const express = require("express"); // express는 엄밀히 말하면 객체 보다는 인스턴스다
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("요청 발생");
    res.status(200).send("Hello Node!");
});

// 일반 미들웨어 등록
// json()처리를 먼저하고 body에 값을 넣고 그 후에 미들웨어를 등록하여 라우팅팅
app.use(express.json());
app.use(express.urlencoded({ extended : true })); // url의 파라미터를 인식하가위함

// 라우트 미들웨어 등록
app.use("/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});