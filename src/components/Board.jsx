import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { ContextProvider } from '../context/ContextProvider';

const Board = () => {
  const {
    board,
    boardHistory,
    setBoardHistory,
    boardResult,
    setBoardResult,
    isRedsNext,
    setIsRedsNext,
    playAgain,
    winner,
    handleUndo,
  } = useContext(ContextProvider);

  useEffect(() => {
    const dataInLS = JSON.parse(localStorage.getItem('Game history'));

    if (dataInLS.length > 0) {
      setBoardHistory(dataInLS);
      console.log('board history from rendering', dataInLS);
      const getBoardResult = dataInLS[dataInLS.length - 1];
      setBoardResult(getBoardResult);

      const resultR = getBoardResult.filter(x => x[2] === 'red');
      const resultY = getBoardResult.filter(x => x[2] === 'yellow');

      if (resultR.length > resultY.length) {
        setIsRedsNext(false);
      } else {
        setIsRedsNext(true);
      }
    } else {
      setBoardResult(board);
    }
  }, []);

  return (
    <>
      <div>
        Next Player:
        {isRedsNext ? 'Red' : 'Yellow'}
      </div>
      <button type='button' onClick={() => playAgain()}>
        Restart the game
      </button>

      {winner !== '' && <div>Winner is {winner}</div>}

      {boardHistory.length > 0 && (
        <button type='button' onClick={() => handleUndo()}>
          Undo movement
        </button>
      )}

      <BoardSize>
        {boardResult.map(arr => (
          <Grid key={arr} eachGrid={arr} />
        ))}
      </BoardSize>
    </>
  );
};

const BoardSize = styled.div`
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 769px) {
    margin-top: 150px;
    width: 1024px;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    width: 700px;
  }
`;

export default Board;
