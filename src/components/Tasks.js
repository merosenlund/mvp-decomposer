import React from 'react';
import {useLoopContext} from '../LoopContext.js';


const Tasks = () => {
  const loops = useLoopContext();

  return (
    <div className="tasks">
      <h5>
        Tasks Zone!
      </h5>
      {loops.map((loop) => {
        return <div>{loop}</div>
      })}
    </div>
  )
}

export default Tasks;