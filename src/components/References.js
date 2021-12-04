import React from 'react';
import {useReferencesContext} from '../contexts/ReferenceContext.js';
import LoopItem from './LoopItem.js';


const References = () => {
  const references = useReferencesContext();

  return (
    <div className="references">
      <h5>References Zone!</h5>
      {references.reduce((loops, loop) => {
        loops.push(<LoopItem key={loop.id} item={loop}></LoopItem>)
        return loops;
      }, [])}
    </div>
  )
}

export default References;