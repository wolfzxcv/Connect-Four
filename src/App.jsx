import React from 'react';
import ContextProvider from './context/ContextProvider';
import Board from './components/Board';

const App = () => {
  return (
    <ContextProvider>
      <Board />
    </ContextProvider>
  );
};

export default App;
