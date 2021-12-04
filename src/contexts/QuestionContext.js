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


export const QuestionProvider = ({children}) => {
  const [questions, updateQuestions] = useState([]);

  useEffect(async () => {
    let newQuestions = await getQuestions(1);
    updateQuestions(newQuestions)
  }, [])

  const getQuestions = async (loopId) => {
    let results = await axios(`/loops/${loopId}/questions`);
    let newQuestions = results.data;
    return newQuestions;
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