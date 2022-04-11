import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setscore] = React.useState(76);
  const scoreChange = (value) => {
    setscore(score + value);
  };
  const [wicket, setwicket] = useState(2);
  const wicketChange = (value) => {
    setwicket(wicket + value);
  };
  const [ball, setball] = useState(50);
  const ballchange = (value) => {
    setball(ball + value);
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">{score}</h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">{wicket}</h1>
        </div>

        <div>
          Over:{"50"}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            if (score > 100) {
              return <h1>india wins</h1>;
            }
            scoreChange(1);
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            if (score > 100) {
              return;
            }
            scoreChange(4);
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            if (score >100) {
              return;
            }
            scoreChange(6);
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            if(wicket>=12){
              return;
            }
            wicketChange(1);
          }}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            ballchange(1);
          }}
        >
          Add 1
        </button>
      </div>

      {
      }    
    </div>
  );
}

export default App;
