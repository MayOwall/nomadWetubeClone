import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => {
    res.send("<h1>Welcome to homepage ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾</h1>");
};

globalRouter.get("/", handleHome);

export default globalRouter;
