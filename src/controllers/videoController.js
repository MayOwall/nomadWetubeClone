export const handleSee = (req, res) => {
  return res.send(`See Video #${req.params.id}`);
};
export const handleSearch = (req, res) => res.send("SEARCH");
export const handleUpload = (req, res) => res.send("VIDEO - WATCH");
export const handleEdit = (req, res) => res.send("VIDEO - EDIT");
export const handleRemove = (req, res) => res.send("VIDEO - DELETE");
