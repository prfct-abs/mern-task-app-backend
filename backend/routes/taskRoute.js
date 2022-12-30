const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTasks,
  getSingleTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

// Routes
// router.get("/", (req, res) => {
//   res.send("Home Page");
// });

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getSingleTask).delete(deleteTask).put(updateTask);

// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getSingleTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;
