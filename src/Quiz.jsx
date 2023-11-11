import { useState } from "react";


const Quiz = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] =useState(0);
    const { question, choices, correctAnswer } = questions[currentQuestion];

    return (
        <div className="quiz_container">
            <>
                <span className="active_question_no">{currentQuestion + 1}</span>
                <span className="total_question">/{questions.length}</span>
                <h2>{question}</h2>
            </>
        </div>
    );
}


export default Quiz;