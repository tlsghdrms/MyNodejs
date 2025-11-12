const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("요청 발생");
    // res.status(200).send("Hello Node!");
    // res.send("Hello Node");
    res.json({ 
        message: "Hello Node!",
        header: req.headers
    });
});

app.get("/home", (req, res) => {
    // res.sendFile(__dirname + "/assets/home.html");
    res.sendFile(path.join(__dirname, "/assets/home.html"));
});

app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");
});

app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contact");
});

app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`ID: ${req.params.id}`);
});

app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update ID: ${req.params.id}`);
});

app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete ID: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});