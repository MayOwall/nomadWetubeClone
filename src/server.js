import express from "express";

// cf. port 4000을 쓰는 것이 백엔드의 관습이라고 한다.
const PORT = 4000;
const app = express();

const routerLogger = (req, res, next) => {
    console.log(`✅ : Path is ${req.path}`);
    next();
};

const methodLogger = (req, res, next) => {
    console.log(`✅ : Method type is ${req.method}`);
    next();
};

// 관습적으로 middleware가 아닌 마지막 controller에는 next()를 적어주지 않는다.
const home = (req, res) => {
    res.send("<h1>Hello, Welcome to homepage \\( ˙▿˙ )/</h1>");
};

const login = (req, res) => {
    res.send(`<h1>Hello, Welcome to login page ( ´ ▽ \` )ﾉ</h1>`);
};
const handleListening = () =>
    console.log(`🚀 : Server is listening on port ${PORT} (ว˙∇˙)ง`);

app.use(methodLogger, routerLogger);
app.get("/", home);
app.get("/login", login);
app.listen(PORT, handleListening);
