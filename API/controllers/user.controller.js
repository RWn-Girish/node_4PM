const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.addNewUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ messgae: "User Register already exist" });
    }
    let imagePath = "";
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }
    req.body.profileImage = imagePath;
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    user = await User.create({ ...req.body, password: hashPassword });
    return res.status(201).json({ message: "User Added Success", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllUsers = async (req, res) => {
  let users = await User.find();
  return res.json({ message: "View All Users", data: users });
};

exports.getUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not Found" });
  }
  return res.status(201).json({ message: "View Single User", data: user });
};

exports.updateUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not Found" });
  }
  user = await User.findByIdAndUpdate(user._id, req.body, { new: true });
  return res.status(202).json({ message: "Update User Success", data: user });
};

exports.deleteUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not Found" });
  }
  user = await User.findByIdAndDelete(user._id);
  return res.status(200).json({ message: "Delete User Success" });
};
