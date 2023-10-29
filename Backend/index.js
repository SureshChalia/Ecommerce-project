const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary")
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const userRoutes = require("./routes/User");
const productRoutes = require("./routes/Product")
const getUsers = require("./routes/AllUsers")



dotenv.config();
const PORT = process.env.PORT || 5000;

//database connect
database.connectDB();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:true,
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/users",getUsers);

//default route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

