import express from "express";
import { handleJoin } from "../controllers/userController";

const globalRouter = express.Router();

const handleHome = (req, res) => {
    res.send("<h1>Welcome to page global-home ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾</h1>");
};

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;
