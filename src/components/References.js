import React from 'react';
import {useLoopContext} from '../LoopContext.js';


const References = () => {
  const loops = useLoopContext();

  return (
    <div className="references">
      <h5>
        References Zone!
      </h5>
      {loops.reduce((loops, loop) => {
        if (loop.type === 'reference') {
          loops.push(<div>{loop.text}</div>)
        }
        return loops;
      }, [])}
    </div>
  )
}

export default References;