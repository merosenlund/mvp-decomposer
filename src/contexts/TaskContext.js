import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {addLoopContext, useLoopContext} from '../contexts/LoopContext.js';


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
  const currentLoop = useLoopContext();
  const addLoop = addLoopContext();

  useEffect(async () => {
    let newTasks = await getTasks(1);
    updateTasks(newTasks);
  }, [])

  const getTasks = async (loopId) => {
    let results = await axios(`/loops/${loopId}/subtasks`);
    let newTasks = results.data;
    return newTasks;
  }

  const addTask = async (loop) => {
    await addLoop(loop);
    let newLoops = await getTasks(currentLoop);
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