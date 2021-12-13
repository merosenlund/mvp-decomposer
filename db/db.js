










module.exports.addLoop = (loop, parentId) => {
  module.exports.loops[parentId][`${loop.type}s`].push(loop.id);
  module.exports.loops[loop.id] = loop
  module.exports.loops[loop.id] = loop
}

module.exports.getLoop = (loopId) => {
  let loop = module.exports.loops[loopId];
  loop.id = parseInt(loopId);
  return loop;
}



// Mock Data
module.exports.loops = {
  '1': {
    type: 'task',
    text: 'Get the database set up',
    done: false,
    tasks: [4],
    questions: [2],
    references: [3],
    relatedReferences: [3],
  },
  '2': {
    type: 'question',
    text: 'How do I use arango?',
    done: false,
    references: [5],
  },
  '3': {
    type: 'reference',
    text: 'arango docs - https://www.arangodb.com/docs/stable/',
    done: false,
  },
  '4': {
    type: 'task',
    text: 'install arango',
    done: false,
  },
  '5': {
    type: 'reference',
    text: 'It feels kind of like mongo because it has some of the same functionality',
    done: false,
  },
}