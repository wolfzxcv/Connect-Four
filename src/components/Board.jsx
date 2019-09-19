import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { SharedContext } from '../context/SharedContext';

const Board = () => {
  const {
    board,
    boardResult,
    setBoardResult,
    checkWhoNext,
    setPlayerName,
    boardHistory,
    setBoardHistory,
  } = useContext(SharedContext);

  useEffect(() => {
    const dataInLS = JSON.parse(localStorage.getItem('Game result'));
    const getPlayerName = JSON.parse(localStorage.getItem('player name'));
    setBoardResult(dataInLS || board);
    setBoardHistory(dataInLS || board);
    console.log('useEffect boardHistory', boardHistory);
    setPlayerName(getPlayerName);

    if (dataInLS) {
      checkWhoNext(dataInLS);
    } else {
      let playerRed;
      let playerYellow;
      playerRed = prompt(`Please enter player 1's name`, 'Red');
      playerYellow = prompt(`Please enter player 2's name`, 'Yellow');

      // if input = '' or user press cancel, then set username as below
      if (playerRed === null || playerRed === '') {
        playerRed = 'Red';
      }
      if (playerYellow === null || playerYellow === '') {
        playerYellow = 'Yellow';
      }
      setPlayerName({ red: playerRed, yellow: playerYellow });

      localStorage.setItem(
        'player name',
        JSON.stringify({ red: playerRed, yellow: playerYellow })
      );
    }
  }, []);

  return (
    <>
      <BoardSize>
        {boardResult.map(arr => (
          <Grid key={arr} eachGrid={arr} />
        ))}
      </BoardSize>
    </>
  );
};

const BoardSize = styled.div`
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 769px) {
    width: 1024px;
  }

  @media (max-width: 768px) {
    width: 700px;
  }
`;

export default Board;
