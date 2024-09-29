require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/databaseConnection");
const { generateOTP } = require("../utility/otpUtils");

const saltRounds = 10;
const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
  console.error("JWT secret key is missing! Please add it to the .env file.");
  process.exit(1);
}

exports.registerUser = (req, res) => {
  const data = req.body;

  pool.query(
    "SELECT * FROM authentication WHERE email = ?",
    [data.email],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
      if (result.length > 0) {
        return res.status(400).json({ message: "Email is already registered" });
      }

      bcrypt.hash(data.password, saltRounds, (err, hash) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Server error");
        }

        data.password = hash;
        pool.query("INSERT INTO authentication SET ?", data, (err, result) => {
          if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).send("Server error");
          }
          res.json({ success: true, message: "User registered successfully" });
        });
      });
    }
  );
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  pool.query(
    "SELECT * FROM authentication WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
      if (result.length > 0) {
        const user = result[0];
        bcrypt.compare(password, user.password, (err, match) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Server error");
          }
          if (match) {
            const id = user.id;
            jwt.sign({ id }, secretKey, { expiresIn: "1h" }, (err, token) => {
              if (err) {
                console.error(err);
                return res.status(500).send("Error generating token");
              }
              res.json({ token });
            });
          } else {
            res.status(401).send("Invalid email or password");
          }
        });
      } else {
        res.status(401).send("Invalid email or password");
      }
    }
  );
};
