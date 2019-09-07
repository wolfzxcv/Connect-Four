import React, { useState, createContext } from 'react';

export const ContextProvider = createContext();

export default props => {
  const board = [];
  for (let y = 6; y >= 1; y -= 1) {
    for (let x = 1; x < 8; x += 1) {
      board.push([x, y, 'white']);
    }
  }

  const [boardResult, setBoardResult] = useState([]);
  const [isRedsNext, setIsRedsNext] = useState(true);
  const [stopGame, setStopGame] = useState(false);

  const playAgain = () => {
    window.localStorage.clear();
    setBoardResult(board);
    setIsRedsNext(true);
    setStopGame(false);
  };

  const checkIfAnyoneWins = result => {
    const colResult = result.map(col => col[0]).sort();

    const colInc = colResult
      .filter((value, index) => colResult.indexOf(value) === index)
      .join('')
      .match(/0123|1234|2345|3456/g);
    const colRep4 = colResult.join('').match(/([0-6])\1{3}/g);

    // console.log('colResult', colResult, 'colRep4', colRep4, 'colInc', colInc);

    // y remains the same
    const rolResult = result.map(row => row[1]).sort();
    const rolInc = rolResult
      .filter((value, index) => rolResult.indexOf(value) === index)
      .join('')
      .match(/0123|1234|2345/g);
    const rolRep4 = rolResult.join('').match(/([0-5])\1{3}/g);

    // console.log('rolResult', rolResult, 'rolRep4', rolRep4, 'rolInc', rolInc);

    // if row repeats the same number 4 times && col increases 1 for 4 times
    if (rolRep4 && colInc) {
      console.log(`${result[0][2]} wins.  `);
      setStopGame(true);
    }

    // if col repeats the same number 4 times && row increases 1 for 4 times
    if (colRep4 && rolInc) {
      console.log(`${result[0][2]} wins. `);
      setStopGame(true);
    }
  };

  const value = {
    board,
    boardResult,
    setBoardResult,
    isRedsNext,
    setIsRedsNext,
    playAgain,
    checkIfAnyoneWins,
    stopGame,
    setStopGame,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
