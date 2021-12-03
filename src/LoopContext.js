import React, { useContext, useState } from 'react';


const LoopContext = React.createContext();
const AddLoopContext = React.createContext();

export const useLoopContext = () => {
  return useContext(LoopContext);
}

export const addLoopContext = () => {
  return useContext(AddLoopContext);
}


export const LoopProvider = ({children}) => {
  const [loops, updateLoops] = useState([]);

  const addLoop = (newLoop) => {
    // Eventually I will add an axios request here to add it to the backend and then get updated loops for the front end... I'm not sure if that will be the best idea but we'll see when I get there.
    let newLoops = loops.slice();
    newLoops.push(newLoop);
    updateLoops(newLoops);
  }

  return (
    <LoopContext.Provider value={loops}>
      <AddLoopContext.Provider value={addLoop}>
        {children}
      </AddLoopContext.Provider>
    </LoopContext.Provider>
  )
}