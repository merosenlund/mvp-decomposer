const data = require('./db.js').loops;


module.exports.getReferences = (loopId) => {
  let referenceIds = data[loopId].references;
  let references = referenceIds.map((id) => {
    let reference = data[id];
    reference.id = id;
    return reference;
  })
  return references;
}

// referenceId is the id of the loop that needs added to loopId
module.exports.addReference = (referenceId, loopId) => {

}