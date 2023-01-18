import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

app.use(morgan("dev"));

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("HOME");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleUser = (req, res) => res.send("USER - EDIT");
userRouter.get("/edit", handleUser);

const videoRouter = express.Router();
const handleVideo = (req, res) => res.send("VIDEO - WATCH");
videoRouter.get("/watch", handleVideo);

app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
