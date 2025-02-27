import mongoose from "mongoose";

const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/donate");
};

connection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error in database" + err);
  });

export default connection;
