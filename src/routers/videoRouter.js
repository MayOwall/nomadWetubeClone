import express from "express";
import {
  handleWatch,
  handleEdit,
  handleDelete,
  handleComment,
  handleCommentDelete,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);
videoRouter.get("/delete", handleDelete);
videoRouter.get("/comments", handleComment);
videoRouter.get("/comments/delete", handleCommentDelete);

export default videoRouter;
