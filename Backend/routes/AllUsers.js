const express = require("express")
const router = express.Router()

const {
  getAllUsers
} = require("../controllers/User")

// /Route for getting all users
router.get("/getallusers",getAllUsers)

module.exports = router