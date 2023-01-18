import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log(`Someone is ${req.method} > "${req.url}"`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") return res.send("<h1>Not allowed page</h1>");
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>Hello, this is <u>HOME</u> page</h1>");
};

const handleLogin = (req, res) => {
  return res.send("<h1>hello, this is <u>LOGIN</u> page</h1>");
};

app.use(logger, privateMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
