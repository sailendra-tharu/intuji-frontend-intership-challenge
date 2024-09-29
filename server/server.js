const express = require("express");
const cors = require("cors");
const databaseConnection = require("./config/databaseConnection");
const authRoutes = require("./routes/authRoutes");
const otpRoutes = require("./routes/otpRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/auth", authRoutes);
app.use("/otp", otpRoutes);

const PORT = process.env.APP_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
