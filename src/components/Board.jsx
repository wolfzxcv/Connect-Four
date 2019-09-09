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
    winner,
    undo,
    redo,
    index,
    history,
    boardHistory,
    setBoardHistory,
  } = useContext(ContextProvider);

  useEffect(() => {
    const dataInLS = JSON.parse(localStorage.getItem('Game result'));
    setBoardResult(dataInLS || board);
    setBoardHistory(dataInLS || board);
    console.log('render', boardHistory);

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
      {winner === '' ? (
        <div> Next Player: {isRedsNext ? 'Red' : 'Yellow'}</div>
      ) : (
        <div>{`Winner is ${winner}`}</div>
      )}

      <button type='button' onClick={undo} disabled={index < 0}>
        undo
      </button>
      <button
        type='button'
        onClick={redo}
        disabled={index > history.length - 2 || index < 0}
      >
        redo
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
