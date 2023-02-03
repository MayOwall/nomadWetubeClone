import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";

  if (password !== password2) {
    return res.status(400).res.render("join", {
      pageTitle,
      errorMessage: "Please check the password.",
    });
  }

  const isExists = await User.exists({ $or: [{ username }, { email }] });
  if (isExists) {
    return res.status(400).res.render("join", {
      pageTitle,
      errorMessage: "This username / email is already taken",
    });
  }

  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
  } catch (e) {
    console.log(e);
    return res.render("join", {
      pageTitle,
      errorMessage: "something got wrong between server",
    });
  }

  res.redirect("/login");
};
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const pageTitle = "Login";
  const { username, password } = req.body;
  const exists = await User.exists({ username });
  if (!exists) {
    return res
      .status(400)
      .render("login", {
        pageTitle,
        errorMessage: "Please check the username",
      });
  }
  res.end();
};
export const handleLogout = (req, res) => res.send("LOGOUT");
export const handleSee = (req, res) => res.send("SEE");
export const handleEdit = (req, res) => res.send("USER - EDIT");
export const handleRemove = (req, res) => res.send("USER - DELETE");
