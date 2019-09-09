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
    checkWhoNext,
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
      checkWhoNext(dataInLS);
    }
  }, []);

  return (
    <>
      <p>
        The first player to connect four of their discs <br />
        horizontally, vertically, or diagonally wins the game.
      </p>
      <button type='button' onClick={() => playAgain()}>
        Restart the game
      </button>
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
        disabled={index > history.length - 3}
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
