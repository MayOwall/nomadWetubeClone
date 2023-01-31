import Video from "../models/Video";

export const getHome = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
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

export const postUpload = async (req, res) => {
  const { title, description, hashTags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashTags: hashTags.split(","),
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

// 아아아아 지루하다아아ㅏ아아 그리고 나 겨드랑이에서 암내 나는 것 같아아ㅏ아아ㅏ 으아 시러어어ㅓ어
