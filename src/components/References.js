import React from 'react';
import {useLoopContext} from '../LoopContext.js';
import LoopItem from './LoopItem.js';


const References = () => {
  const loops = useLoopContext();

  return (
    <div className="references">
      <h5>References Zone!</h5>
      {loops.reduce((loops, loop) => {
        if (loop.type === 'reference') {
          loops.push(<LoopItem item={loop}></LoopItem>)
        }
        return loops;
      }, [])}
    </div>
  )
}

export default References;