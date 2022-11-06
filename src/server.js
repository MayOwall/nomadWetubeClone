import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger);

// Routers
const globalRouter = express.Router();
const handleHome = (req, res) => {
    res.send("Home");
};
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => {
    res.send("Edit-user");
};
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => {
    res.send("Watch-video");
};
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
    console.log(`🚀 : Server is listening on port ${PORT} (ว˙∇˙)ง`);

app.listen(PORT, handleListening);
