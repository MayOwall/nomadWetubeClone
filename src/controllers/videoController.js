export const handleTrending = (req, res) => {
  const videos = [
    { title: "hello" },
    { title: "from" },
    { title: "trending" },
    { title: "videos" },
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
