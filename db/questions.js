const data = require('./db.js').loops;


module.exports.getQuestions = (loopId) => {
  let questionIds = data[loopId].questions;
  let questions = questionIds.map((id) => {
    let question = data[id];
    question.id = id;
    return question;
  })
  return questions;
}

// questionId is the id of the loop that needs added to loopId
module.exports.addQuestion = (questionId, loopId) => {

}