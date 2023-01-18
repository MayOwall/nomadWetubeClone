import express from "express";

const videoRouter = express.Router();
const handleVideo = (req, res) => res.send("VIDEO - WATCH");
videoRouter.get("/watch", handleVideo);

export default videoRouter;
