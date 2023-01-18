import express from "express";

const userRouter = express.Router();
const handleUser = (req, res) => res.send("USER - EDIT");
userRouter.get("/edit", handleUser);

export default userRouter;
