import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import makePokemonArr from '../pokemonarr/pokemonarr';
import shuffleCards from '../helperFunctions/shuffleArr';

const GameArea = (props) => {
  const [cards, setCards] = useState([]);

  const makeCardsAtGameStart = () => {
    const arr = [];
    const pokemon = makePokemonArr();
    for (let i = 0; i < 12; i++) {
      const obj = {
        index: i,
        number: i + 1,
        hasBeenClicked: false,
        image: pokemon[i].image,
        name: pokemon[i].name,
        alt: pokemon[i].name + '-icon',
        cardID: uniqid(),
      };
      arr.push(obj);
    }
    setCards(arr);
  };

  const changeHasBeenClicked = (obj) => {
    const index = obj.index;
    const newArr = cards.map((obj) => ({ ...obj }));
    const item = { ...newArr[index] };
    item.hasBeenClicked = true;
    newArr[index] = item;
    setCards(newArr);
    props.increaseScore();
  };

  const resetGame = () => {
    const newArr = cards.map((obj) => ({ ...obj }));
    newArr.map((item) => (item.hasBeenClicked = false));
    setCards(newArr);
  };

  const endGame = () => {
    props.newBestScore();
    props.resetScore();
    resetGame();
  };

  const handleClick = (item) => {
    item.hasBeenClicked ? endGame() : changeHasBeenClicked(item);
  };

  const makeCardsInTheDOM = () => {
    const newArr = shuffleCards(cards);
    return newArr.map((item) => {
      return (
        <div
          key={item.cardID}
          onClick={() => handleClick(item)}
          className="card"
        >
          {/* <div>{item.number}</div> */}
          {/* <div>{item.hasBeenClicked ? 'true' : 'false'}</div> */}
          <img
            className="pokemon-icon"
            src={process.env.PUBLIC_URL + item.image}
            alt={item.alt}
          ></img>
          <div>{item.name}</div>
        </div>
      );
    });
  };

  useEffect(() => {
    makeCardsAtGameStart();
  }, []);

  return (
    <div id="game-area">
      <div className="card-area">{makeCardsInTheDOM()}</div>
    </div>
  );
};

export default GameArea;
