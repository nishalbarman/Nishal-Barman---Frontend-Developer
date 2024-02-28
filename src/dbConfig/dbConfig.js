import mongoose from "mongoose";

export const connect = () => {
  try {
    const conncetionString =
      "mongodb+srv://project-playo:Xi2UCKjIEzd2EChFAjZmupCrOlZt7Vp2@project-playo.z9knmzk.mongodb.net/thematrixlab";

    mongoose.connect(conncetionString);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database is ready to use!");
    });

    connection.on("error", (error) => {
      console.log("Database connection error ---->", error);
    });
  } catch (error) {
    console.log("Mongoose Error! --> ", error);
    s;
  }
};
