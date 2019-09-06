import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Board = () => {
  const grid = [];

  for (let col = 5; col >= 0; col -= 1) {
    for (let row = 0; row < 7; row += 1) {
      grid.push([col, row]);
    }
  }

  console.log('const grid = ', grid);

  return (
    <BoardSize>
      {grid.map(coordinate => (
        <Cell key={[coordinate]} coordinate={coordinate} />
      ))}
    </BoardSize>
  );
};

const BoardSize = styled.div`
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
