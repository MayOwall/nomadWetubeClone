import express from "express";
import { getJoin, postJoin, handleLogin } from "../controllers/userController";
import { getHome, search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", getHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", handleLogin);
rootRouter.get("/search", search);

export default rootRouter;
