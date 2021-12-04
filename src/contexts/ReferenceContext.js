import React, { useContext, useState } from 'react';


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

  const addReference = (newLoop) => {
    // Eventually I will add an axios request here to add it to the backend and then get updated loops for the front end... I'm not sure if that will be the best idea but we'll see when I get there.
    let newLoops = references.slice();
    newLoops.push(newLoop);
    updateReferences(newLoops);
  }

  return (
    <ReferencesContext.Provider value={references}>
      <AddReferenceContext.Provider value={addLoop}>
        {children}
      </AddReferenceContext.Provider>
    </ReferencesContext.Provider>
  )
}