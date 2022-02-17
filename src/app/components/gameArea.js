import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const GameArea = (props) => {
  // const [isGameOver, setIsGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  const makeCardsAtGameStart = () => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      const obj = {
        index: i,
        number: i + 1,
        hasBeenClicked: false,
        image: '',
        name: '',
        cardID: uniqid(),
      };
      arr.push(obj);
    }
    setCards(arr);
  };

  const shuffleCards = () => {
    const newArr = cards.map((obj) => ({ ...obj }));
    let currentIndex = newArr.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newArr[currentIndex], newArr[randomIndex]] = [
        newArr[randomIndex],
        newArr[currentIndex],
      ];
    }
    return newArr;
  };

  const changeHasBeenClicked = (obj) => {
    const index = obj.index;
    const newArr = cards.map((obj) => ({ ...obj }));
    const item = { ...newArr[index] };
    item.hasBeenClicked = true;
    newArr[index] = item;
    setCards(newArr);
  };

  const handleClick = (e, item) => {
    changeHasBeenClicked(item);
  };

  const makeCardsInTheDOM = () => {
    const newArr = shuffleCards();
    return newArr.map((item) => {
      return (
        <div
          key={item.cardID}
          onClick={(e) => handleClick(e, item)}
          className="card"
        >
          <div>{item.number}</div>
          <div>{item.hasBeenClicked ? 'true' : 'false'}</div>
        </div>
      );
    });
  };

  useEffect(() => {
    makeCardsAtGameStart();
  }, []);

  return (
    <div>
      <button onClick={shuffleCards}>shuffle</button>
      <button onClick={props.increaseScore}>increase score</button>
      <button onClick={props.resetScore}>reset score</button>
      <div>game area</div>
      <div className="card-area">{makeCardsInTheDOM()}</div>
    </div>
  );
};

export default GameArea;
