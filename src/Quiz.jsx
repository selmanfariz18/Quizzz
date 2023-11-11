import { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  return (
    <div className="quiz_container">
      <>
        <span className="active_question_no">{currentQuestion + 1}</span>
        <span className="total_question">/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
          {choices.map((answer, index) => (
            <li
              onClick={() => onAnswerClick(answer, index)}
              key={answer}
              className={answerIdx === index ? "selected_answer" : null}
            >
              {answer}
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default Quiz;
