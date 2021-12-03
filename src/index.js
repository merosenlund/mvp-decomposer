import ReactDOM from 'react-dom';
import React from 'react';
import './styles/Globals.css';
import {LoopProvider} from './LoopContext.js'
import Tasks from './components/Tasks.js';
import BrainDump from './components/BrainDump.js';


const App = () => {
  return (
    <LoopProvider>
      <Tasks></Tasks>
      <BrainDump></BrainDump>
    </LoopProvider>
  )
  }
ReactDOM.render(<App />, document.getElementById('app'));
