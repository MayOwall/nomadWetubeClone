import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Hello, this is <u>HOME</u> page</h1>");
};

const handleLogin = (req, res) => {
  return res.send("<h1>hello, this is <u>LOGIN</u> page</h1>");
};

app.use(morgan("dev"));
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
