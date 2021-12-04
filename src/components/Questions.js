import React from 'react';
import {useLoopContext} from '../contexts/LoopContext.js';
import LoopItem from './LoopItem.js';


const Questions = () => {
  const loops = useLoopContext();

  return (
    <div className="questions">
      <h5>Questions Zone!</h5>
      {loops.reduce((loops, loop) => {
        if (loop.type === 'question') {
          loops.push(<LoopItem item={loop}></LoopItem>)
        }
        return loops;
      }, [])}
    </div>
  )
}

export default Questions;