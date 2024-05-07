import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://letuananh28072002:Tuananh1234@cluster0.vhrrsxm.mongodb.net/food-delivery"
    )
    .then(() => console.log("Connected to MongoDB"));
};
