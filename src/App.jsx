import React from 'react';
import SharedContextProvider from './context/SharedContext';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
  return (
    <SharedContextProvider>
      <Header />
      <Board />
    </SharedContextProvider>
  );
};

export default App;
