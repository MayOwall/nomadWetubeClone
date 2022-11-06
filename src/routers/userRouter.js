import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => {
    res.send("<h1>Welcome to page user-edit ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾</h1>");
};

userRouter.get("/edit", handleEditUser);

export default userRouter;
