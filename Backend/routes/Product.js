const express = require("express")
const router = express.Router()

const {addProduct,getAllProducts} = require("../controllers/Product");
const {auth, isUser, isAdmin} = require("../middlewares/auth")

router.post("/addProduct", auth, isAdmin, addProduct)
router.get("/getAllProducts",getAllProducts)


module.exports = router