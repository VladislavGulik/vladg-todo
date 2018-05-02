const tasks = require('../models/tasks');

module.exports = {

  saveTasks: (result) => {
    const newTask = new Result(result.body);
    return newTask.save((err) => {
      if (err) {
        console.log(err);
      }
    });
  },

  getTasks: (request) => {
    return tasks.findById(request.params.id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return result;
      }
    });
  }
}
