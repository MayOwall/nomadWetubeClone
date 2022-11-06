import express from "express";

const PORT = 4000;
const app = express();

const handleListening = () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
};

app.get("/", () => console.log("hello I'm the answer for /GET"));
app.listen(PORT, handleListening);
