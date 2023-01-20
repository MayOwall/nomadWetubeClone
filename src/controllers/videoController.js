export const handleTrending = (req, res) => {
  const videos = [
    {
      id: 1,
      title: "hello",
      rating: 5,
      comments: 2,
      createdAt: "2022-12-11",
      views: 59,
    },
    {
      id: 2,
      title: "from",
      rating: 5,
      comments: 2,
      createdAt: "2022-12-12",
      views: 59,
    },
    {
      id: 3,
      title: "trending",
      rating: 5,
      comments: 2,
      createdAt: "2022-12-13",
      views: 59,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const handleWatch = (req, res) =>
  res.render("Watch", { pageTitle: "Video - Watch" });
export const handleSearch = (req, res) => res.send("SEARCH");
export const handleUpload = (req, res) =>
  res.render("edit", { pageTitle: "Video - Edit" });
export const handleEdit = (req, res) => res.send("VIDEO - EDIT");
export const handleRemove = (req, res) => res.send("VIDEO - DELETE");
