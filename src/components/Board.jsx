import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { ContextProvider } from '../context/ContextProvider';

const Board = () => {
  const {
    board,
    boardResult,
    setBoardResult,
    isRedsNext,
    setIsRedsNext,
    playAgain,
  } = useContext(ContextProvider);

  useEffect(() => {
    setBoardResult(JSON.parse(localStorage.getItem('Game result')) || board);

    const dataInLS = JSON.parse(localStorage.getItem('Game result'));
    if (dataInLS) {
      const resultR = dataInLS.filter(x => x[2] === 'red');
      const resultY = dataInLS.filter(x => x[2] === 'yellow');

      if (resultR.length > resultY.length) {
        setIsRedsNext(false);
      } else {
        setIsRedsNext(true);
      }
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
