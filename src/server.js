import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();

app.use(morgan("dev"));
app.use("/", globalRouter);
app.use("/video", videoRouter);
app.use("/user", userRouter);

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);
