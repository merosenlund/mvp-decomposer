import React, { useContext, useState } from 'react';


const TasksContext = React.createContext();
const AddTaskContext = React.createContext();

export const useTasksContext = () => {
  return useContext(TasksContext);
}

export const addTaskContext = () => {
  return useContext(AddTaskContext);
}


export const LoopProvider = ({children}) => {
  const [tasks, updateTasks] = useState([]);

  const addTask = (newLoop) => {
    // Eventually I will add an axios request here to add it to the backend and then get updated loops for the front end... I'm not sure if that will be the best idea but we'll see when I get there.
    let newLoops = tasks.slice();
    newLoops.push(newLoop);
    updateTasks(newLoops);
  }

  return (
    <TasksContext.Provider value={tasks}>
      <AddTaskContext.Provider value={addTask}>
        {children}
      </AddTaskContext.Provider>
    </TasksContext.Provider>
  )
}