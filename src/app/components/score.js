import React from 'react';

const Score = (props) => {
  return (
    <div id="score-container">
      <div id="currentScore">curr score: {props.score}</div>
      <div id="bestScore">best score: {props.bestScore}</div>
    </div>
  );
};

export default Score;
