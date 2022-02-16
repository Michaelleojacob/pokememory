import React from 'react';

const GameArea = (props) => {
  return (
    <div>
      <button onClick={props.increaseScore}>increase score</button>
      <button onClick={props.resetScore}>reset score</button>
      <div>game area</div>
    </div>
  );
};

export default GameArea;
