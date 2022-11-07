import express from "express";
import {
    handleEdit,
    handleDelete,
    handleLogout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(":id", handleSee);
userRouter.get("/logout", handleLogout);
userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelete);

export default userRouter;
