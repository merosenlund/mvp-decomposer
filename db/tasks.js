const data = require('./db.js').loops;


module.exports.getSubTasks = (loopId) => {
  let taskIds = data[loopId].tasks;
  let tasks = taskIds.map((id) => {
    let task = data[id];
    task.id = id;
    return task;
  })
  return tasks;

}

// taskId is the id of the loop that needs added to loopId
module.exports.addSubTask = (taskId, loopId) => {

}