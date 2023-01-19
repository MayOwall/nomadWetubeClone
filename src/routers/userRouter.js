import express from "express";
import {
  handleLogout,
  handleEdit,
  handleRemove,
  handleSee,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", handleLogout);
userRouter.get("/edit", handleEdit);
userRouter.get("/remove", handleRemove);
userRouter.get(":id", handleSee);

export default userRouter;
