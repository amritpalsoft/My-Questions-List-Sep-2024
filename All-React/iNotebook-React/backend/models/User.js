const mongoose = require("mongoose");
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);


const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    unique: true,
    immutable: true
  }

}, { timestamps: true });
UserSchema.plugin(AutoIncrement, { inc_field: 'userId', startsAt: 1 });
const User = mongoose.model("myuser", UserSchema);
module.exports = User;
