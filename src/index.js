import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send("Hello, this is home page");
};

const handleLogin = (req, res) => {
  return res.send("hello, this is login page");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
