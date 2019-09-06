import React, { useState, createContext } from 'react';

export const ContextProvider = createContext();

export default props => {
  const board = [];
  for (let y = 5; y >= 0; y -= 1) {
    for (let x = 0; x < 7; x += 1) {
      board.push([x, y, 'white']);
    }
  }

  const [isRedsNext, setIsRedsNext] = useState(true);
  const [boardResult, setBoardResult] = useState(board);

  const value = {
    isRedsNext,
    setIsRedsNext,
    boardResult,
    setBoardResult,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
