import ReactDOM from 'react-dom';
import React from 'react';
import './styles/Globals.css';
import Tasks from './components/Tasks.js';
import BrainDump from './components/BrainDump.js';


const App = () => {
  return (
    <div>
      <Tasks></Tasks>
      <BrainDump></BrainDump>
    </div>
  )
  }
ReactDOM.render(<App />, document.getElementById('app'));
