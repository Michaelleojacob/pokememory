import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const GameArea = (props) => {
  // const [isGameOver, setIsGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  const cardObjects = () => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      const obj = {
        index: i,
        number: i + 1,
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

  const handleHasBeenClicked = (obj) => {
    const index = obj.index;
    const newArr = [...cards];
    const item = { ...newArr[index] };
    item.hasBeenClicked = true;
    newArr[index] = item;
    setCards(newArr);
  };

  const handleClick = (e, item) => {
    console.log(item.hasBeenClicked);
    handleHasBeenClicked(item);
  };

  const makeCards = (item) => {
    return (
      <div
        key={uniqid()}
        onClick={(e) => handleClick(e, item)}
        className="card"
      >
        <div>{item.number}</div>
        <div>{item.hasBeenClicked ? 'true' : 'false'}</div>
      </div>
    );
  };

  return (
    <div>
      <button onClick={props.increaseScore}>increase score</button>
      <button onClick={props.resetScore}>reset score</button>
      <div>game area</div>
      <div className="card-area">{cards.map((item) => makeCards(item))}</div>
    </div>
  );
};

export default GameArea;
