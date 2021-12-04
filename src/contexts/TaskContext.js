import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';


const TasksContext = React.createContext();
const AddTaskContext = React.createContext();

export const useTasksContext = () => {
  return useContext(TasksContext);
}

export const addTaskContext = () => {
  return useContext(AddTaskContext);
}


export const TaskProvider = ({children}) => {
  const [tasks, updateTasks] = useState([]);

  useEffect(async () => {
    let newTasks = await getTasks(1);
    updateTasks(newTasks);
  }, [])

  const getTasks = async (loopId) => {
    let results = await axios(`/loops/${loopId}/subtasks`);
    let newTasks = results.data;
    return newTasks;
  }

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