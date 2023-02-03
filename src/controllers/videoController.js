import Video from "../models/Video";

export const getHome = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: "desc" });
  return res.render("home", { pageTitle: "Home", videos });
};

export const getWatch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res
      .status(404)
      .res.render("404", { pageTitle: "404 : Video not Found" });
  }
  return res.render("watch", {
    pageTitle: video.title,
    video,
  });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res
      .status(404)
      .res.render("404", { pageTitle: "404 : Video not Found" });
  }
  return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashTags } = req.body;
  const isExist = await Video.exists({ _id: id });
  if (!isExist) {
    return res
      .status(404)
      .res.render("404", { pageTitle: "404 : Video not Found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashTags,
  });
  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashTags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashTags,
    });
    return res.redirect("/");
  } catch (e) {
    console.log(e);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: e._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "SEARCH🔎", videos });
};
