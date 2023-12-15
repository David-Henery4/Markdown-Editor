import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.DATABASE_URI);
mongoose.Promise = global.Promise

const userSchema = new Schema({
  username: String,
  password: String,
  userId: String,
})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User