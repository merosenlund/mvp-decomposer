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
      if (text !== '') {
        addLoop(text);
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


export default BrainDump;