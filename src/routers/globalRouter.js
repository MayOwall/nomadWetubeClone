import express from "express";
import { handleJoin, handleLogin } from "../controllers/userController";
import { getHome, handleSearch } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);

export default globalRouter;
