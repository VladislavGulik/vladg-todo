const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
	task: { type: String },
},
{ collection: "tasks", strict: false });

module.exports = mongoose.model('tasks', tasksSchema);
