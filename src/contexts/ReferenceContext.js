import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {addLoopContext, useLoopContext} from '../contexts/LoopContext.js';


const ReferencesContext = React.createContext();
const AddReferenceContext = React.createContext();

export const useReferencesContext = () => {
  return useContext(ReferencesContext);
}

export const addReferenceContext = () => {
  return useContext(AddReferenceContext);
}


export const ReferenceProvider = ({children}) => {
  const [references, updateReferences] = useState([]);
  const currentLoop = useLoopContext();
  const addLoop = addLoopContext();

  useEffect(async () => {
    let newReferences = await getReferences(currentLoop);
    updateReferences(newReferences)
  }, [])

  const getReferences = async (loopId) => {
    let results = await axios(`/loops/${loopId}/references`);
    let newReferences = results.data;
    return newReferences;
  }

  const addReference = async (loop) => {
    await addLoop(loop);
    let newLoops = await getReferences(currentLoop);
    updateReferences(newLoops);
  }

  return (
    <ReferencesContext.Provider value={references}>
      <AddReferenceContext.Provider value={addReference}>
        {children}
      </AddReferenceContext.Provider>
    </ReferencesContext.Provider>
  )
}