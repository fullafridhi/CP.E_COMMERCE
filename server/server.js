const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
require("dotenv").config();

//routes configuration
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/user", require("./routes/userRoutes"));
// app.use("/api/admin", require("./routes/userRoutes"));

app.use("/api/admin", adminRoutes);
//database connection

const connectDB = require("./config/connectDB");
connectDB();
//port connection

const port = process.env.PORT || 8081;

app.listen(port, () => console.log("my server is running in port:", port));
