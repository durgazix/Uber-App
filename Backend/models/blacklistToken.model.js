const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true},
  createdAt: { type: Date, default: Date.now, expires: 84600} // 24 hours from creation
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
