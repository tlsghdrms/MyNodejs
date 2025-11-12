const express = require("express");
const app = express();
const port = 3000;

app.get("/users/:id", (req, res) => {
    const name = req.params.id;
    res.send(`Hello, ${name}`);
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});
