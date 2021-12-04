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
    let results = await getQuestions(1);
    let newQuestions = results.data;
    updateQuestions(newQuestions)
  }, [])

  const getQuestions = async (loopId) => {
    let newQuestions = await axios(`/loops/${loopId}/questions`);
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