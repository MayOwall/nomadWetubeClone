export const handleSearch = (req, res) => res.send("SEARCH");
export const handleWatch = (req, res) => res.send("VIDEO - WATCH");
export const handleEdit = (req, res) => res.send("VIDEO - EDIT");
export const handleDelete = (req, res) => res.send("VIDEO - DELETE");
export const handleComment = (req, res) => res.send("VIDEO - COMMENT");
export const handleCommentDelete = (req, res) =>
  res.send("VIDEO - COMMENT - DELETE");
