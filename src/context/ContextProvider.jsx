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
  const [stopGame, setStopGame] = useState(false);
  const [winner, setWinner] = useState('');

  const playAgain = () => {
    window.localStorage.clear();
    setBoardResult(board);
    setIsRedsNext(true);
    setStopGame(false);
    setWinner('');
  };

  const announceWinner = win => {
    setWinner(win);
    setStopGame(true);
  };

  const checkIsFour = (a, b, c, d) => {
    // Check a=b=c=d !=  'white'
    return a !== 'white' && a === b && a === c && a === d;
  };

  const checkIfWin = result => {
    let r;
    let c;
    // Check vertical
    for (r = 0; r < 3; r++)
      for (c = 0; c < 7; c++)
        if (
          checkIsFour(
            result[r][c],
            result[r + 1][c],
            result[r + 2][c],
            result[r + 3][c]
          )
        )
          announceWinner(result[r][c]);

    // Check horizontal
    for (r = 0; r < 6; r++)
      for (c = 0; c < 4; c++)
        if (
          checkIsFour(
            result[r][c],
            result[r][c + 1],
            result[r][c + 2],
            result[r][c + 3]
          )
        )
          announceWinner(result[r][c]);

    // Check diagonal down-right
    for (r = 0; r < 3; r++)
      for (c = 0; c < 4; c++)
        if (
          checkIsFour(
            result[r][c],
            result[r + 1][c + 1],
            result[r + 2][c + 2],
            result[r + 3][c + 3]
          )
        )
          announceWinner(result[r][c]);

    // Check diagonal down-left
    for (r = 3; r < 6; r++)
      for (c = 0; c < 4; c++)
        if (
          checkIsFour(
            result[r][c],
            result[r - 1][c + 1],
            result[r - 2][c + 2],
            result[r - 3][c + 3]
          )
        )
          announceWinner(result[r][c]);
  };

  const value = {
    board,
    boardResult,
    setBoardResult,
    isRedsNext,
    setIsRedsNext,
    playAgain,
    checkIfWin,
    stopGame,
    setStopGame,
    winner,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
