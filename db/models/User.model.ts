import mongoose from "mongoose";
import { IUser } from "../interfaces/User.interface";

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  id: { type: String, required: true },
  password: { type: String, required: true },
  likePlace: [
    {
      place: { type: String, required: true },
      address: { type: String },
    },
  ],
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
