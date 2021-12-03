import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js';


const BrainDump = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);

  const onEnter = (e) => {
    if (e.code === 'Enter') {
      let contentState = editorState.getCurrentContent();
      let lastBlock = contentState.getLastBlock();
      let secondToLastBlock = contentState.getBlockBefore(lastBlock.getKey())
      let text = secondToLastBlock.getText();
      // console.log(text);
      // debugger;
    }
  }

  return (
    <div onKeyUp={onEnter} className="brainDump">
      <div>Braind Dump Zone</div>
      <Editor editorState={editorState} onChange={setEditorState}/>
    </div>
  );
};


export default BrainDump;