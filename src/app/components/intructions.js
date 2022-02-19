import React, { useState } from 'react';

const Instructions = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderIsOpen = () => {
    return (
      <div>
        <div id="instructions-title">how to play:</div>
        <div id="instructions-text">
          Begin the game by clicking on a pokemon.
          <br /> Click on different pokemon to win.
          <br /> There are 12 unique pokemon, try to click each one once.
        </div>
        <button
          className="instruct-btn"
          id="close-instructions"
          onClick={handleClick}
        >
          hide instructions
        </button>
      </div>
    );
  };

  const renderIsClosed = () => {
    return (
      <div>
        <button className="instruct-btn" onClick={handleClick}>
          show instructions
        </button>
      </div>
    );
  };

  return (
    <div id="instructions">{isOpen ? renderIsOpen() : renderIsClosed()}</div>
  );
};

export default Instructions;
