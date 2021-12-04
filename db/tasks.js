const data = require('./db.js').loops;


module.exports.getSubTasks = (loopId) => {
  let subtaskIds = data[loopId].subtasks;
  let subtasks = subtaskIds.map((id) => {
    let subtask = data[id];
    subtask.id = id;
    return subtask;
  })
  return subtasks;

}

// taskId is the id of the loop that needs added to loopId
module.exports.addSubTask = (taskId, loopId) => {

}