import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

const Header = () => {
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(400);
  }, []);

  return (
    <div id="header-container">
      <img id="header-img" src={'/images/pokeball.jpeg'} alt="pokeball"></img>
      <div id="header-title">
        <div ref={circleInstance} id="header-txt">
          pokememory
        </div>
      </div>
    </div>
  );
};

export default Header;
