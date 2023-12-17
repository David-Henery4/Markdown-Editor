import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.DATABASE_URI);
mongoose.Promise = global.Promise

const markdownListSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: String,
  name: { type: String, required: true },
  content: String,
});

const markdownList = mongoose.models.markdownlist || mongoose.model("markdownlist", markdownListSchema)

export default markdownList
