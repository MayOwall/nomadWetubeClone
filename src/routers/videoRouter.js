import express from "express";
import {
  handleSee,
  handleEdit,
  handleRemove,
  handleUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", handleSee);
videoRouter.get("/:id/edit", handleEdit);
videoRouter.get("/:id/delete", handleRemove);
videoRouter.get("/upload", handleUpload);

export default videoRouter;
