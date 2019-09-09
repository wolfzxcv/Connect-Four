import React, { useState, createContext } from 'react';
import useStateHistory from '../hook/useStateHistory';

export const ContextProvider = createContext();

export default props => {
  const board = [];
  for (let y = 5; y >= 0; y -= 1) {
    for (let x = 0; x < 7; x += 1) {
      board.push([x, y, 'white']);
    }
  }

  // still have problem with history
  const [
    boardHistory,
    setBoardHistory,
    { history, index, setIndex },
  ] = useStateHistory([]);
  const [boardResult, setBoardResult] = useState([]);
  const [isRedsNext, setIsRedsNext] = useState(true);
  const [stopGame, setStopGame] = useState(false);
  const [winner, setWinner] = useState('');

  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
      console.log('show undo result', history[index - 1]);
      setBoardResult(history[index - 1]);
      console.log('show undo index', index - 1);
    } else {
      setBoardResult(board);
      setIndex(-1);
      console.log('undo, index reset to -1', -1);
    }
  };

  const redo = () => {
    if (index + 1 < history.length - 1) {
      setIndex(index + 1);
      setBoardResult(history[index + 1]);
      console.log('show redo result', history[index + 1]);
      console.log('show redo index', index + 1);
    }
  };

  const playAgain = () => {
    window.localStorage.clear();
    window.location.reload();
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
    boardHistory,
    setBoardHistory,
    undo,
    redo,
    index,
    history,
  };

  return <ContextProvider.Provider value={value} {...props} />;
};
