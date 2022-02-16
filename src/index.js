import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

const Script = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Script />, document.getElementById('root'));
