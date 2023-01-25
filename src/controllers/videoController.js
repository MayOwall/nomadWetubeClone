//dummy database
let videos = [
  {
    id: 1,
    title: "video 1",
    rating: 5,
    comments: 2,
    createdAt: "2022-12-11",
    views: 1,
  },
  {
    id: 2,
    title: "video 2",
    rating: 5,
    comments: 2,
    createdAt: "2022-12-12",
    views: 59,
  },
  {
    id: 3,
    title: "video 3",
    rating: 5,
    comments: 2,
    createdAt: "2022-12-13",
    views: 59,
  },
];

export const handleTrending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const getWatch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  // here we will upload video
  return res.redirect("/");
};
