import express from "express";

const PORT = 4000;
const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle!");
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>Hello, this is <u>HOME</u> page</h1>");
};

const handleLogin = (req, res) => {
  return res.send("<h1>hello, this is <u>LOGIN</u> page</h1>");
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
