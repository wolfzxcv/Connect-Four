import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cell = ({ coordinate }) => {
  const handleLocation = () => {
    console.log('coordinate', coordinate);
    console.log('col', coordinate[0], 'row', coordinate[1]);
  };

  return (
    <InlineBlock>
      <CellBG
        onClick={() => handleLocation(coordinate)}
        coordinate={coordinate}
      >
        <Color />
      </CellBG>
    </InlineBlock>
  );
};

Cell.propTypes = {
  coordinate: PropTypes.number.isRequired,
};

const InlineBlock = styled.div`
  display: inline-block;
`;

const CellBG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;

  @media (min-width: 769px) {
    width: 146px;
    height: 120px;
  }

  @media (max-width: 768px) {
    width: 95px;
    height: 95px;
  }
`;

const Color = styled.div`
  background: white;
  border-radius: 50%;

  @media (min-width: 769px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export default Cell;
