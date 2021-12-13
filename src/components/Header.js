import React from 'react';
import {useLoopContext} from '../contexts/LoopContext.js';


const Header = () => {
  const loop = useLoopContext();
  return (
    <div className="header">
      <h3>Header Zone!</h3>
      <p>{loop.id}</p>
    </div>
  )
}

export default Header;