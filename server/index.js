const express = require('express');
const app = express();
const port = 3000;

const db = require('../db/db.js');
const tasks = require('../db/tasks.js');
const questions = require('../db/questions.js');
const references = require('../db/references.js');

app.use(express.static('dist'));
app.use(express.json());



app.get('/loops/:loopId', (req, res) => {
  let loopId = req.params.loopId;
  let loop = db.getLoop(loopId);
  res.status(200).send(loop);
})

app.get('/loops/:loopId/subtasks', (req, res) => {
  let loopId = req.params.loopId;
  let subtasks = tasks.getSubTasks(loopId);
  res.status(200).send(subtasks);
})

app.get('/loops/:loopId/questions', (req, res) => {
  let loopId = req.params.loopId;
  let subQuestions = questions.getQuestions(loopId);
  res.status(200).send(subQuestions);
})

app.get('/loops/:loopId/references', (req, res) => {
  let loopId = req.params.loopId;
  let subReferences = references.getReferences(loopId);
  res.status(200).send(subReferences);
})

app.post('/loops', async (req, res) => {
  let loop = req.body.data.loop;
  let parentId = req.body.data.parentId;
  await db.addLoop(loop, parentId);
  res.sendStatus(200)
})



app.listen(port, () => {
  console.log(`MVP-Decomposer listening at http:/localhost:${port}`)
})