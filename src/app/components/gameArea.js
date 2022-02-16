import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const GameArea = (props) => {
  // const [isGameOver, setIsGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  const cardObjects = () => {
    const arr = [];
    for (let i = 1; i < 13; i++) {
      const obj = {
        number: i,
        hasBeenClicked: false,
        image: '',
        name: '',
      };
      arr.push(obj);
    }
    setCards(arr);
  };

  useEffect(() => {
    cardObjects();
  }, []);

  const handleClick = (e) => {
    console.log(e);
  };

  const makeCards = (item) => {
    console.log(item);
    return (
      <div key={uniqid()} onClick={handleClick}>
        <div>{item.number}</div>
        <div>{item.hasBeenClicked}</div>
      </div>
    );
  };

  return (
    <div>
      <button onClick={props.increaseScore}>increase score</button>
      <button onClick={props.resetScore}>reset score</button>
      <div>game area</div>
      <div>{cards.map((item) => makeCards(item))}</div>
    </div>
  );
};

export default GameArea;
