import React, { useContext, useState, useEffect } from 'react';
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
  const [currentLoop, updateCurrentLoop] = useState(null);


  useEffect( async () => {
    let loop = await getLoop(1);
    updateCurrentLoop(loop);
  }, [])

  const getLoop = async (loopId) => {
    let loop = await axios.get(`/loops/${loopId}`);
    return loop;
  }


  const addLoop = (loop) => {
    return axios.post('/loops', {
      data: {
        loop: loop,
        parentId: currentLoop.id
      }
    })
  }

  return (
    <LoopContext.Provider value={currentLoop}>
      <AddLoopContext.Provider value={addLoop}>
        {currentLoop ? children : null}
      </AddLoopContext.Provider>
    </LoopContext.Provider>
  )
}