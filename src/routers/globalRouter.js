import express from "express";
import { handleJoin, handleLogin } from "../controllers/userController";
import { getHome, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", search);

export default globalRouter;
