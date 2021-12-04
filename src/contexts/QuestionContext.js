import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {addLoopContext, useLoopContext} from '../contexts/LoopContext.js';


const QuestionsContext = React.createContext();
const AddQuestionContext = React.createContext();

export const useQuestionsContext = () => {
  return useContext(QuestionsContext);
}

export const addQuestionContext = () => {
  return useContext(AddQuestionContext);
}


export const QuestionProvider = ({children}) => {
  const [questions, updateQuestions] = useState([]);
  const currentLoop = useLoopContext();
  const addLoop = addLoopContext();

  useEffect(async () => {
    let newQuestions = await getQuestions(currentLoop);
    updateQuestions(newQuestions)
  }, [])

  const getQuestions = async (loopId) => {
    let results = await axios(`/loops/${loopId}/questions`);
    let newQuestions = results.data;
    return newQuestions;
  }

  const addQuestion = async (loop) => {
    await addLoop(loop);
    let newLoops = await getQuestions(currentLoop);
    updateQuestions(newLoops);
  }

  return (
    <QuestionsContext.Provider value={questions}>
      <AddQuestionContext.Provider value={addQuestion}>
        {children}
      </AddQuestionContext.Provider>
    </QuestionsContext.Provider>
  )
}