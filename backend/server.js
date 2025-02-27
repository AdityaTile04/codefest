import express from "express";
import connection from "./utils/db.js";
const PORT = 3000;
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connection();
});
