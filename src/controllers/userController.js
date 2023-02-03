import User from "../models/User";
import bcrypt from "bcrypt";

// join
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

// login
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const pageTitle = "Login";
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Please check the username",
    });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Please check the password",
    });
  }
  console.log("someone logged in successfully 🎉");
  return res.redirect("/");
};

export const handleLogout = (req, res) => res.send("LOGOUT");
export const handleSee = (req, res) => res.send("SEE");
export const handleEdit = (req, res) => res.send("USER - EDIT");
export const handleRemove = (req, res) => res.send("USER - DELETE");
