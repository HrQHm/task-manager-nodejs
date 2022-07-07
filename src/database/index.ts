import mongoose from "mongoose";
import "dotenv/config";

export default async function ConnectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (err) {
    console.log(err)
  }
}


mongoose.connection.on("connected", () => {
  console.log("Mongodb connected to:", mongoose.connection.db.databaseName);
});

mongoose.connection.on("error", (error) => {
  console.error("error", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});

