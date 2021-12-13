const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;