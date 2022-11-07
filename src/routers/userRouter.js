import express from "express";
import {
    handleSee,
    handleEdit,
    handleDelete,
    handleLogout,
} from "../controllers/userController";

const userRouter = express.Router();

// 파라미터가 포함된 url :을 적어주므로써 express에게 이것이 변수라는 것을 알려줄 수 있다.
userRouter.get("/logout", handleLogout);
userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelete);
userRouter.get("/:id(\\d+)", handleSee);

export default userRouter;
