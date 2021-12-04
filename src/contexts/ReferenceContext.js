import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';


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

  useEffect(async () => {
    let newReferences = await getReferences(1);
    updateReferences(newReferences)
  }, [])

  const getReferences = async (loopId) => {
    let results = await axios(`/loops/${loopId}/references`);
    let newReferences = results.data;
    return newReferences;
  }

  const addReference = (newLoop) => {
    // Eventually I will add an axios request here to add it to the backend and then get updated loops for the front end... I'm not sure if that will be the best idea but we'll see when I get there.
    let newLoops = references.slice();
    newLoops.push(newLoop);
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