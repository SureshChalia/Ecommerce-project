const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'User' });
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all users",
      data : users
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Filed to fetch all users",
      error: error.message,
    });
  }
};