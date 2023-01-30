import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");
mongoose.set("strictQuery", false);

const handleOpen = () => console.log("🚀 Connected to MongoDB");
const handleError = (error) => console.log("🚨 DB Error", error);

const db = mongoose.connection;
db.on("error", handleError);
db.once("open", handleOpen);
