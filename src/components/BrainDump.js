import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js';
import {addLoopContext} from '../LoopContext.js';


const BrainDump = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);
  const addLoop = addLoopContext();

  const onEnter = (e) => {
    if (e.code === 'Enter') {
      let contentState = editorState.getCurrentContent();
      let lastBlock = contentState.getLastBlock();
      let secondToLastBlock = contentState.getBlockBefore(lastBlock.getKey())
      let text = secondToLastBlock.getText();
      let type = getLoopType(text);
      if (text !== '') {
        addLoop({text, type});
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