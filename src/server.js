import "./db";
import "./models/Video";
import express from "express";
import morgan from "morgan";
import { globalRouter, userRouter, videoRouter } from "./routers";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

const handleListening = () => {
  console.log(`🚀 Server listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
