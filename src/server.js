import express from "express";

// cf. port 4000을 쓰는 것이 백엔드의 관습이라고 한다.
const PORT = 4000;
const app = express();

const home = (req, res) =>
    res.send("<h1>Hello, welcome to homepage \\( ˙▿˙ )/</h1>");

const handleListening = () =>
    console.log(`🚀 : Server is listening on port ${PORT} (ว˙∇˙)ง`);

app.get("/", home);
app.listen(PORT, handleListening);
