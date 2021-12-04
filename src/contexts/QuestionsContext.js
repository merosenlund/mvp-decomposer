import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';


const QuestionsContext = React.createContext();
const AddQuestionContext = React.createContext();

export const useQuestionsContext = () => {
  return useContext(QuestionsContext);
}

export const addQuestionsContext = () => {
  return useContext(AddQuestionContext);
}


export const QuestionsProvider = ({children}) => {
  const [questions, updateQuestions] = useState([]);

  useEffect(async () => {

  }, [])

  const getQuestions = async (loopId) => {
    let newQuestions = await axios(`/loops/${loopId}/questions`);
    updateQuestions(newQuestions)
  }

  const addQuestion = (newLoop) => {
    let newLoops = questions.slice();
    newLoops.push(newLoop);
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