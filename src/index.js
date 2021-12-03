import ReactDOM from 'react-dom';
import React from 'react';
import Tasks from './components/Tasks.js';
import BrainDump from './components/BrainDump.js';


const App = () => {
  return (
    <div>
      <BrainDump></BrainDump>
      <Tasks></Tasks>
    </div>
  )
  }
ReactDOM.render(<App />, document.getElementById('app'));
