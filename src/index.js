import express from "express";

const PORT = 4000;
const app = express();

const handleHome = () => console.log("GET / is required");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
