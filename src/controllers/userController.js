import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, location } = req.body;
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  res.redirect("/login");
};
export const login = (req, res) => res.send("LOGIN");
export const handleLogout = (req, res) => res.send("LOGOUT");
export const handleSee = (req, res) => res.send("SEE");
export const handleEdit = (req, res) => res.send("USER - EDIT");
export const handleRemove = (req, res) => res.send("USER - DELETE");
