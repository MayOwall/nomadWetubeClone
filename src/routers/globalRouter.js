import express from "express";
import { handleJoin, handleLogin } from "../controllers/userController";
import { handleSearch } from "../controllers/videoController";

const globalRouter = express.Router();

// 홈페이지 컨트롤러는 어디에 두는게 맞으려나..,,
const handleHome = (req, res) => {
    return res.send("<h1>Welcome to page global-home ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾</h1>");
};

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", handleSearch);

export default globalRouter;
