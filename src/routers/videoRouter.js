import express from "express";
import {
    handleSee,
    handleEdit,
    handleDelete,
    handleUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", handleUpload);
videoRouter.get("/:id", handleSee);
videoRouter.get("/:id/edit", handleEdit);
videoRouter.get("/:id/delete", handleDelete);

export default videoRouter;
