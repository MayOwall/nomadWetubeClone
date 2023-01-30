import Video from "../models/Video";

export const getHome = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const getWatch = (req, res) => {
  return res.render("watch", {
    pageTitle: `Watching `,
  });
};

export const getEdit = (req, res) => {
  return res.render("edit", { pageTitle: `Editing: ` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title, description, hashTags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashTags: hashTags.split(","),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect("/");
};
