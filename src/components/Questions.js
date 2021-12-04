import React from 'react';
import {useQuestionsContext} from '../contexts/QuestionContext.js';
import LoopItem from './LoopItem.js';


const Questions = () => {
  const questions = useQuestionsContext();

  return (
    <div className="questions">
      <h5>Questions Zone!</h5>
      {questions.reduce((loops, loop) => {
        if (loop.type === 'question') {
          loops.push(<LoopItem item={loop}></LoopItem>)
        }
        return loops;
      }, [])}
    </div>
  )
}

export default Questions;