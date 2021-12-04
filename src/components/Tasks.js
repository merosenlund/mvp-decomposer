import React from 'react';
import {useTasksContext} from '../contexts/TaskContext.js';
import LoopItem from './LoopItem.js';


const Tasks = () => {
  const tasks = useTasksContext();

  return (
    <div className="tasks">
      <h5>Tasks Zone!</h5>
      {tasks.reduce((loops, loop) => {
        loops.push(<LoopItem key={loop.id} item={loop}></LoopItem>)
        return loops;
      }, [])}
    </div>
  )
}

export default Tasks;