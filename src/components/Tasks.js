import React from 'react';
import {useLoopContext} from '../LoopContext.js';


const Tasks = () => {
  const loops = useLoopContext();

  return (
    <div className="tasks">
      <h5>
        Tasks Zone!
      </h5>
      {loops.reduce((loops, loop) => {
        if (loop.type === 'task') {
          loops.push(<div>{loop.text}</div>)
        }
        return loops;
      }, [])}
    </div>
  )
}

export default Tasks;