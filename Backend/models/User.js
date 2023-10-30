const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type:Number,
    required:true,
  },
  dob: {
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    required: true,
  },
  products: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }
],
  image: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
 
},

  // Add timestamps for when the document is created and last modified
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);