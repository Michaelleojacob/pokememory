import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Flair = () => {
  const handleClick = (link) => window.open(link);

  return (
    <div id="flair">
      <div id="flair-container">
        <div id="email">
          <FontAwesomeIcon icon={faCopyright} />
          <div>michaelleojacob@gmail.com</div>
        </div>
        <div id="socials">
          <div
            id="github"
            onClick={() => handleClick('https://github.com/Michaelleojacob')}
          >
            <FontAwesomeIcon className="noClick" icon={faGithub} />
            <div className="noClick">github</div>
          </div>
          <div
            id="linkedin"
            onClick={() =>
              handleClick('https://www.linkedin.com/in/michael-leo-jacob/')
            }
          >
            <FontAwesomeIcon className="noClick" icon={faLinkedin} />
            <div className="noClick">linkedin</div>
          </div>
          <div
            id="repo"
            onClick={() =>
              handleClick('https://github.com/Michaelleojacob/pokememory')
            }
          >
            <FontAwesomeIcon className="noClick" icon={faCode} />
            <div className="noClick">repo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flair;
