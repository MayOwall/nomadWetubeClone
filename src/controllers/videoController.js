import Video from "../models/Video";

export const getHome = (req, res) => {
  Video.find({}, (error, videos) => {});
  res.render("home", { pageTitle: "Home", videos });
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
  const { title } = req.body;
  return res.redirect("/");
};
