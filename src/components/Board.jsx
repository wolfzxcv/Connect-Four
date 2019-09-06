import React, { useContext } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { ContextProvider } from '../context/ContextProvider';

const Board = () => {
  const { boardResult, isRedsNext } = useContext(ContextProvider);
  return (
    <>
      <div>
        Next Player:
        {isRedsNext ? 'Red' : 'Yellow'}
      </div>
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
