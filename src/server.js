import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    console.log("someone is approaching to home");
    return res.send({ message: "hello from here" });
};

const handleListening = () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
};

app.get("/", handleHome);
app.listen(PORT, handleListening);
