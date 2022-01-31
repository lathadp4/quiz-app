import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Quiz App</h1>

          <form>
            <div>
              <label className="name">Enter your Name:</label>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="select">
              <select>
                <option>Select Language</option>
                <option>English</option>
                <option>Kannada</option>
                <option>Hindi</option>
              </select>
            </div>
            <br></br>
            <button className="button is-info is-medium" onClick={onQuizStart}>
              Start
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Start;
