const express = require("express");
const app = express();
const port = 3000;

// body 본문의 json 파싱
app.use(express.json()); // json 코드 인식

// list 생성
let nextID = 4;
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Carol" },
];

// 1. 전체 데이터 조회
app.get("/users", (req, res) => {
    res.json(users);
});

// 2. 특정 id만 조회
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id); // Number() id를 숫자로 변환하기 위함
    const user = users.find(user => user.id === id); // user.id와 id값이 같다면 id(인덱스)에 해당하는 user의 값을 할당당
    if (!user) {
        return res.status(404).send({ error: "user not found" });
    }
    res.json(user);
});

// 3. user 추가하기
app.post("/users/", (req, res) => {
    const name = (req.body?.name).trim(); // trim : 문자열 앞뒤 공백을 삭제
    if (!name) {
        res.status(404).json({ error: "name is required" });
    }

    const user = { id: nextID++, name}
    users.push(user);
    res.status(201).json(user);
});

// 4. id 삭제
app.delete("/users/:id", (req, res) => {
    const i = users.findIndex(user => user.id == req.params.id); // findIndex(): 몇번째 위치에 있는지 찾음
    if (i === -1) {
        return res.status(404).json({ error: "user not found" });
    }

    const users_d = users.splice(i, 1)[0]; // splice(): 리스트에서 특정한 것만 추출함, 나머지 것들은 팝처럼 사라짐짐
    res.json({users_d});
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});