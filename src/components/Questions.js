import React from 'react';
import {useLoopContext} from '../LoopContext.js';


const Questions = () => {
  const loops = useLoopContext();

  return (
    <div className="questions">
      <h5>
        Questions Zone!
      </h5>
      {loops.reduce((loops, loop) => {
        if (loop.type === 'question') {
          loops.push(<div>{loop.text}</div>)
        }
        return loops;
      }, [])}
    </div>
  )
}

export default Questions;