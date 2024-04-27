import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const servicioChatbotSchema = new Schema(
  {
    name: String,
    phone: String,
    tree: Array,
  },
  {
    timestamps: true,
  }
);

const ServicioChatbot =
  mongoose.models.ServicioChatbot ||
  mongoose.model("ServicioChatbot", servicioChatbotSchema);

export default ServicioChatbot;
