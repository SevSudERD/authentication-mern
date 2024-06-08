import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  profilePicture:{
    type: String,
    default: "https://www.google.com.tr/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fprofile-png%2F&psig=AOvVaw02gNDW0o_Ois_tCMa1m5Gp&ust=1717845208562000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjplKSuyYYDFQAAAAAdAAAAABAE",
  },

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;