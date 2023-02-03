export const getJoin = (req, res) => {
  return res.render("createAccount", { pageTitle: "Create Account" });
};
export const postJoin = (req, res) => {
  console.log(req.body);
  res.end();
};
export const handleLogin = (req, res) => res.send("LOGIN");
export const handleLogout = (req, res) => res.send("LOGOUT");
export const handleSee = (req, res) => res.send("SEE");
export const handleEdit = (req, res) => res.send("USER - EDIT");
export const handleRemove = (req, res) => res.send("USER - DELETE");
