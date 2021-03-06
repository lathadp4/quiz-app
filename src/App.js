import React, { useState, useEffect } from "react";
import "./App.css";
import Start from "./components/Start";
import Question from "./components/Question";
import quizData from "./data/quiz.json";
import End from "./components/End";
import Modal from "./components/Modal";

let interval;
function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswer([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswer}
          numberOfQuestion={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answer}
          data={quizData.data}
          onReset={resetClickHandler}
          onAnswerCheck={() => setShowModal(true)}
          time={time}
        />
      )}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          results={answer}
          data={quizData.data}
        />
      )}
    </div>
  );
}

export default App;
