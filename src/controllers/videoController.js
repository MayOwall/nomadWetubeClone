let videos = [
  {
    id: 1,
    title: "video 1",
    rating: 5,
    comments: 2,
    createdAt: "2022-12-11",
    views: 59,
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
export const handleWatch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching ${video.title}`,
  });
};
export const handleSearch = (req, res) => res.send("SEARCH");
export const handleUpload = (req, res) =>
  res.render("edit", { pageTitle: "Video - Edit" });
export const handleEdit = (req, res) => res.send("VIDEO - EDIT");
export const handleRemove = (req, res) => res.send("VIDEO - DELETE");
