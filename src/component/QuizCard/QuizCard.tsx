import React from "react";
import { AnswerObject } from "../../App";
import "./QuizCard.css";

type props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuizCard: React.FC<props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <>
      <div className="card-container">
        <p className="number">
          Question: {questionNr} / {totalQuestions}
        </p>
        <p
          className="question0"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <div className="answer">
          {answers.map((answer) => (
            <div
              key={answer}
              className={
                userAnswer?.correctAnswer === answer
                  ? "green"
                  : userAnswer?.correctAnswer !== answer &&
                    userAnswer?.answer === answer
                  ? "red"
                  : ""
              }
            >
              <button
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default QuizCard;
