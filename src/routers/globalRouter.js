import express from "express";
import { handleJoin, handleLogin } from "../controllers/userController";
import { handleSearch } from "../controllers/videoController";

const globalRouter = express.Router();
const fakeUser = {
  username: "MayOwall",
  loggedIn: true,
};

const handleHome = (req, res) =>
  res.render("home", {
    pageTitle: "Home",
    content: "HOME!",
    fakeUser,
  });

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handleLogin);
globalRouter.get("/search", handleSearch);

export default globalRouter;
