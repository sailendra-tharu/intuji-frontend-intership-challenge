require("dotenv").config();
const pool = require("../config/databaseConnection");
const transporter = require("../config/mailer");
const { generateOTP } = require("../utility/otpUtils");

exports.sendOtp = (req, res) => {
  const { email } = req.body;
  const otpData = generateOTP();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your OTP for Password Reset",
    text: `Your OTP is ${otpData.otp}. It is valid for 2 minutes.`,
  };

  const query = `
    INSERT INTO authentication (email, otp, otp_expire_at, otp_verified, name, password)
    VALUES (?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE otp = VALUES(otp), otp_expire_at = VALUES(otp_expire_at), otp_verified = VALUES(otp_verified)
  `;

  pool.query(
    query,
    [email, otpData.otp, new Date(otpData.expiry), 0, "Default Name", ""],
    (dbErr) => {
      if (dbErr) {
        console.error("Error storing OTP in the database:", dbErr);
        return res
          .status(500)
          .json({ success: false, message: "Error storing OTP" });
      }

      transporter.sendMail(mailOptions, (mailErr, info) => {
        if (mailErr) {
          console.error("Error sending OTP email:", mailErr);
          return res
            .status(500)
            .json({ success: false, message: "Error sending OTP" });
        }
        res.json({ success: true, message: "OTP sent successfully" });
      });
    }
  );
};

exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  pool.query(
    "SELECT otp, otp_expire_at FROM authentication WHERE email = ? ORDER BY id DESC",
    [email],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      }

      if (result.length === 0 || result[0].otp !== otp) {
        return res.status(400).json({ message: "Invalid OTP" });
      }

      const { otp_expire_at } = result[0];

      if (new Date() > new Date(otp_expire_at)) {
        return res.status(400).json({ message: "OTP expired" });
      }

      res.json({ message: "OTP verified successfully" });
    }
  );
};
