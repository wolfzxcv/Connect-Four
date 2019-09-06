import React from 'react';
import ContextProvider from './context/ContextProvider';
import Board from './components/Board';

const App = () => {
  return (
    <ContextProvider>
      <div>Connect Four</div>
      <Board />
    </ContextProvider>
  );
};

export default App;
