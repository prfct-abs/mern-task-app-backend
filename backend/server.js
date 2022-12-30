const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/connectDB");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv").config();

const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const { application } = require("express");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// Middleware
app.use(express.json()); //used to send data as json
app.use(express.urlencoded({ extended: false })); //used to send data as form url encoded
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"],
  })
);

app.use("/api/v1/tasks", taskRoutes);
// const logger = (req, res, next) => {
//   console.log("Middleware ran");
//   console.log(req.method);
//   next();
// };

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});
/* moved to Routes folder
// Create a Task
// app.post("/api/v1/tasks", logger, async (req, res)
app.post("/api/v1/tasks", async (req, res) => {
  //   console.log(req.body); //logger is a middleware function has access to request and response of the route. Here console will always print UNDEFINED
  //This will print data once the express middleware is defined which is "app.use(express.json())"
  //   res.send("Task Created");
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Get/Read Data
app.get("/api/v1/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}); */

//Use this function alternative to mongoose.connect and start the server
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();
