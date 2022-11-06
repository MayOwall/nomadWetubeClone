import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
// morgan()은 자동으로 next()를 호출하므로, 따로 next()를 적어 줄 필요가 없다ㅏ.
const logger = morgan("dev");

const home = (req, res) => {
    res.send("<h1>Hello, Welcome to homepage \\( ˙▿˙ )/</h1>");
};

const login = (req, res) => {
    res.send(`<h1>Hello, Welcome to login page ( ´ ▽ \` )ﾉ</h1>`);
};
const handleListening = () =>
    console.log(`🚀 : Server is listening on port ${PORT} (ว˙∇˙)ง`);

app.use(logger);
app.get("/", home);
app.get("/login", login);
app.listen(PORT, handleListening);
