const User = require("../models/User");
const mongoose = require("mongoose");
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all  fields required!",
      });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "user is  already exist!",
      });
    }

    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });

    res.status(201).json({
      success: true,
      message: "user  register succefully!",
      data: {
        id: user._id,
        username: username,
        email: email,
        password: password,
      },
    });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ success: false, message: "Internal server  error" });
  }
};
