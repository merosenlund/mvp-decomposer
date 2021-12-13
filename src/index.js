import ReactDOM from 'react-dom';
import React from 'react';
import './styles/Globals.css';
import {LoopProvider} from './contexts/LoopContext.js';
import {TaskProvider} from './contexts/TaskContext.js';
import {QuestionProvider} from './contexts/QuestionContext.js';
import {ReferenceProvider} from './contexts/ReferenceContext.js';
import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import Questions from './components/Questions.js';
import References from './components/References.js';
import BrainDump from './components/BrainDump.js';


const App = () => {
  return (
    <LoopProvider>
      <TaskProvider>
        <QuestionProvider>
          <ReferenceProvider>
            <Header></Header>
            <Tasks></Tasks>
            <Questions></Questions>
            <References></References>
            <BrainDump></BrainDump>
          </ReferenceProvider>
        </QuestionProvider>
      </TaskProvider>
    </LoopProvider>
  )
  }
ReactDOM.render(<App />, document.getElementById('app'));
