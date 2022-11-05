import express from "express";

const PORT = 4000;
const app = express();

const handleListening = () => {
    console.log("Server is listening on port 4000 🚀");
};

app.listen(PORT, handleListening);
