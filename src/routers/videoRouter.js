import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
    res.send("<h1>Welcome to page video-watch ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾</h1>");
};

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;
