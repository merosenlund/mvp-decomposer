import React from 'react';

const LoopItem = ({ item }) => {
  return (
    <div className='listItemContainer'>
      {item.type === 'task' ? <input type='checkbox'/> : null}
      <label className='listItem'>{item.text}</label>
    </div>
  );
};


export default LoopItem;