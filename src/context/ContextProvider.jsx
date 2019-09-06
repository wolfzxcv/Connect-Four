import React, { useState, createContext } from 'react';

export const ContextProvider = createContext();

export default props => {
  const board = [];
  for (let y = 5; y >= 0; y -= 1) {
    for (let x = 0; x < 7; x += 1) {
      board.push([x, y, 'white']);
    }
  }

  const [boardResult, setBoardResult] = useState([]);
  const [isRedsNext, setIsRedsNext] = useState(true);

  const playAgain = () => {
    window.localStorage.clear();
    setBoardResult(board);
    setIsRedsNext(true);
  };

  const value = {
    board,
    boardResult,
    setBoardResult,
    isRedsNext,
    setIsRedsNext,
    playAgain,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
