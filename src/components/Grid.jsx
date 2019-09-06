import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContextProvider } from '../context/ContextProvider';

const Grid = ({ eachGrid }) => {
  const { boardResult, setBoardResult, isRedsNext, setIsRedsNext } = useContext(
    ContextProvider
  );

  const handleLocation = () => {
    // console.log('cell result', eachGrid);

    const wholeColumn = boardResult
      .filter(x => x[0] === eachGrid[0])
      .sort((a, b) => a[1] - b[1]);
    console.log('whole column', wholeColumn);

    // check if column is still available
    const checkColumnAvailable = wholeColumn.filter(
      x => x[1] === 5 && x[2] === 'white'
    );

    if (checkColumnAvailable.length > 0) {
      const placeHere = wholeColumn.find(x => x[2] === 'white');
      placeHere[2] = isRedsNext ? 'red' : 'yellow';

      setBoardResult(boardResult);
      setIsRedsNext(!isRedsNext);
    }
  };

  return (
    <InlineBlock>
      <CellBG onClick={() => handleLocation(eachGrid)} eachGrid={eachGrid}>
        <MarkedColor color={eachGrid[2]} />
      </CellBG>
    </InlineBlock>
  );
};

Grid.propTypes = {
  eachGrid: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
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

const MarkedColor = styled.div`
  background: ${props => props.color};
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

export default Grid;
