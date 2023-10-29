const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate")

const otpSchema = new mongoose.Schema({

  email: {
    type:String,
    required:true,
  },
  otp: {
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
    // required:true, 
  } 
});

// function - to send emails for otp

async function sendVerificationEmail(email,otp){
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from Gimbol",
      emailTemplate(otp),
      );
    console.log("Email sent Successfully",mailResponse.response);
  } catch (error) {
    console.error("Error occured while sendig otp verification email",error);
    throw error;
  }
}

// Define a post-save hook to send email after the document has been saved
otpSchema.pre("save",async function(next){
  console.log("New document saved to database");
  // Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

module.exports = mongoose.model("OTP",otpSchema);