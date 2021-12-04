import React, { useContext, useState } from 'react';
import axios from 'axios';


const LoopContext = React.createContext();
const AddLoopContext = React.createContext();

export const useLoopContext = () => {
  return useContext(LoopContext);
}

export const addLoopContext = () => {
  return useContext(AddLoopContext);
}


export const LoopProvider = ({children}) => {
  const [currentLoop, updateCurrentLoop] = useState(1);



  const addLoop = (loop) => {
    return axios.post('/loops', {
      data: {
        loop: loop,
        parentId: currentLoop
      }
    })
  }

  return (
    <LoopContext.Provider value={currentLoop}>
      <AddLoopContext.Provider value={addLoop}>
        {children}
      </AddLoopContext.Provider>
    </LoopContext.Provider>
  )
}