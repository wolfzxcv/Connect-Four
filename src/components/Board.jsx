import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Board = () => {
  const grid = [];

  for (let y = 5; y >= 0; y -= 1) {
    for (let x = 0; x < 7; x += 1) {
      grid.push([x, y]);
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
