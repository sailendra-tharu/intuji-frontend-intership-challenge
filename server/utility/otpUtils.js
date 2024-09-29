exports.generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expiry = Date.now() + 2 * 60 * 1000;
  return { otp, expiry };
};
