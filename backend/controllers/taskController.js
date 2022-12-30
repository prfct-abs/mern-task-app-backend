const Task = require("../models/taskModel");

// Create a Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get a single task
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const singleTask = await Task.findById(id);
    if (!singleTask) {
      return res.status(404).json(`No task with id: ${id} found`);
    }
    res.status(200).json(singleTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) {
      return res.status(404).json(`No task with id: ${id} found to be deleted`);
    }
    res.status(200).json("Task deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updateOne = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateOne) {
      return res.status(404).json(`No task with id: ${id} to update!`);
    }
    res.status(200).json(updateOne);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  createTask: createTask,
  getTasks,
  getSingleTask,
  deleteTask,
  updateTask,
};
