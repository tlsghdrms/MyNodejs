const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

dbConnect();

app.use(express.static("./public"));

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));
// 여러 명의 사용자를 취급하려면 "/register" 이런식으로 라우트를 추가해줘야함
// 이 예시는 사용자 한명만 취급하므로 따로 추가 안함

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
