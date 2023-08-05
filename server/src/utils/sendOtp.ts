import nodemailer from 'nodemailer'

const auth_email= process.env.EMAIL 
const auth_password = process.env.PASSWORD;

let otpValue = null;

const transporter = nodemailer.createTransport({
  service : "gmail",
  auth: {
    user:auth_email,
    pass:auth_password
  }
});

function sendVerificationCode(email:string) {
  return new Promise((resolve , reject) =>{
    const otp = Math.floor(1000+Math.random() * 9000); 
    const mailOptions = {
      from : auth_email,
      to:""+ email,
      subject:"OTP to verify" ,
      html : `<p>Your OTP code is <span style=font-size:20px><b>${otp}</b></span>. Please enter this code to verify your email address.</p>`,
    };
    transporter.sendMail(mailOptions , function(error:string){
      if(error) {
        reject();
      }else {
        otpValue = otp;
        resolve({ status : true, otp})
      }
    })
  })
}

module.exports = { sendVerificationCode }