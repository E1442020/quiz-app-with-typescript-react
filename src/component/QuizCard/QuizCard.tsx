import React from 'react';
import { AnswerObject } from '../../App';
import './QuizCard.css';


type props={
    question:string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    


}
 const QuizCard: React.FC<props>=({
    
        question,
        answers,
        callback,
        userAnswer,
        questionNr,
        totalQuestions,
        
})=> {
  return (
    <>
    <div className='card-container'>
    <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p className='question'>{question}</p>
    <div className='answer'>
    {answers.map((answer) => (
       
        <button  key ={answer} disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span >{answer}</span> 
          </button>
         
      ))}
    </div>
    </div>
    
    </>
  )
}
export default QuizCard;