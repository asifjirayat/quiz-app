import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import quizComplete from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // Function handle answer selection
  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  // Function to handle skip answer
  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  // If quiz array exhausted, quiz completed to be rendered
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
