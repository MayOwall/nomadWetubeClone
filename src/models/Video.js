import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  hashTags: [{ type: String }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    ratting: { type: Number, required: true, default: 0 },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;

//후후 5시... 1시간 반 뒤면 퇴근이당 ><
// 몽고디비 잼없어..웨 없어...이강의 웨 잼없어...
// 그래도 빨리 끝내야 서브카테고리 작업 들어가기 전에 할 수 있을텐데.,,
