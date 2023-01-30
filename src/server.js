import express from "express";
import morgan from "morgan";
import { globalRouter, userRouter, videoRouter } from "./routers";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

export default app;
