import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import fighterRoute from "./route/fighter.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// used for port error(connecting frontend and backend)
app.use(cors());

// it parses the data send from body
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

// connect to mongoDB
try {
  mongoose.connect(URL, {
    // useNewURLParser: true,
    // useUnifiedTopology: true,
  });
  console.log("Connected to mongoDb");
} catch (error) {
  console.log("Error : ", error);
}

// defining routes
app.use("/fight", fighterRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
