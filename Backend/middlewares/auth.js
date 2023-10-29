const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth =async (req, res, next) => {
  try {
    //extract jwt token
    const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");
    // console.log("token inside auth",token);
    //if token missing,then return response
    if (token===null) {
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      })
    }

    //verify the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decode);
      req.user = decode;
    } catch (error) {
      return res.status(401).json({
        error:error.message,
        success: false,
        message: "Token is invalid",
      })
    }
    next();
  }
  catch (error) {
    return res.status(401).json({
      success: false,
      message: "something went wrong ,while verifying the token"
    })
  }
}

//isStudent
exports.isUser = async (req, res, next) => {
  try {
    if (req.user.role !== "User") {
      return res.status(401).json({
        success: false,
        message: "This is a protcted route for students only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified,Please try again",
    })
  }
}

//isAdmin
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protcted route for Admin only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role is not User role cannot be verified,Please try againmatching"
    });
  }
}    

