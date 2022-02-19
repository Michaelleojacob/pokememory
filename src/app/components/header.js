import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

const Header = () => {
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(400);
  }, []);

  return (
    <div id="header-container">
      <div id="header-title">
        <div ref={circleInstance} id="header-txt">
          pokememory
        </div>
      </div>
    </div>
  );
};

export default Header;
