import React from 'react';

import './App.scss';
import { Buttons } from './buttons';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        React Demo Site with Material-UI V5
      </header>
      <div>
        <Buttons></Buttons>
      </div>
    </div>
  );
}
