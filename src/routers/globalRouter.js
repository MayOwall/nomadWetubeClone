import express from "express";
import { handleJoin, handleLogin } from "../controllers/userController";
import { handleTrending, handleSearch } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", handleTrending);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);

export default globalRouter;
