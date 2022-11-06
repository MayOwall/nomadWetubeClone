import express from "express";

const PORT = 4000;
const app = express();

const gossipMiddleware = (req, res, next) => {
    console.log("I'm on the middle");
    next();
};

const handleHome = (req, res) => {
    console.log("someone is approaching to home");
    return res.send({ message: "hello from here" });
};

const handleNext = (req, res) => {
    return res.end();
};

const handleListening = () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
};

app.get("/", handleHome);
app.get("/next", gossipMiddleware, handleNext);

app.listen(PORT, handleListening);
