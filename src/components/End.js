import React, { useState, useEffect } from "react";
import { formatTime } from "./utils";

const End = ({ results, data, onReset, onAnswerCheck, time }) => {
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswer(correct);
  }, []);
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>your results</h3>
          <p>
            {correctAnswer} of {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswer / data.length) * 100)}%</strong>
          </p>
          <p>
            <strong>Your time:</strong>
            {formatTime(time)}
          </p>
          <button className="button is-info mr-2" onClick={onAnswerCheck}>
            Check your answer
          </button>
          <button className="button is-success" onClick={onReset}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
