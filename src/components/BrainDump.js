import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js';
import {addLoopContext} from '../contexts/LoopContext.js';
import {addTaskContext} from '../contexts/TaskContext.js';
import {addQuestionContext} from '../contexts/QuestionContext.js';
import {addReferenceContext} from '../contexts/ReferenceContext.js';


const BrainDump = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);
  const addTask = addTaskContext();
  const addQuestion = addQuestionContext();
  const addReference = addReferenceContext();

  const onEnter = (e) => {
    if (e.code === 'Enter') {
      let contentState = editorState.getCurrentContent();
      let lastBlock = contentState.getLastBlock();
      let secondToLastBlock = contentState.getBlockBefore(lastBlock.getKey())
      let text = secondToLastBlock.getText();
      let type = getLoopType(text);
      let id = secondToLastBlock.getKey();
      if (type === 'task') {

        text = text.slice(1);
      }
      let newLoop = {
        id,
        text,
        type,
      }
      if (text !== '') {
        if (type === 'task') {
          addTask(newLoop);
        } else if (type === 'question') {
          addQuestion(newLoop);
        } else if (type === 'reference') {
          addReference(newLoop);
        }
      }
    }
  }

  return (
    <div onKeyUp={onEnter} className="brainDump">
      <h5>Brain Dump Zone</h5>
      <Editor editorState={editorState} onChange={setEditorState}/>
    </div>
  );
};


const getLoopType = (text) => {
  if (text[text.length - 1] === '?') {
    return 'question';
  } else if (text[0] === '-') {
    return 'task';
  } else {
    return 'reference';
  }
}


export default BrainDump;