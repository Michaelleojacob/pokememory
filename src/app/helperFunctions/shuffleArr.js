const shuffleCards = (arr) => {
  const newArr = arr.map((obj) => ({ ...obj }));
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

export default shuffleCards;
