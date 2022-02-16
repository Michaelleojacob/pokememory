import React from 'react';

const Score = (props) => {
  return (
    <div>
      <div>
        <div>score: {props.score}</div>
        <div>best: {props.bestScore}</div>
      </div>
    </div>
  );
};

export default Score;
