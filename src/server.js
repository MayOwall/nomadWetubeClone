import express from "express";

const PORT = 4000;
const app = express();

// Middlewares
const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
};
const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>This page is not allowed.</h1>");
    }
    next();
};

// Controllers
const handleHome = (req, res) => {
    console.log("someone is approaching to home");
    return res.send({ message: "hello from here" });
};

const handleProtected = (req, res) => {
    return res.send("<h1>Welcome to the private lounge</h1>");
};

const handleListening = () => {
    console.log(`Server is listening on port ${PORT} 🚀`);
};

app.use(logger, privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

app.listen(PORT, handleListening);
