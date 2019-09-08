import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContextProvider } from '../context/ContextProvider';

const Grid = ({ eachGrid }) => {
  const {
    boardResult,
    setBoardResult,
    isRedsNext,
    setIsRedsNext,
    checkIfWin,
    stopGame,
    boardHistory,
    setBoardHistory,
  } = useContext(ContextProvider);

  const handlePlacedLocation = () => {
    // console.log('cell result', eachGrid);
    if (!stopGame) {
      const wholeColumn = boardResult
        .filter(x => x[0] === eachGrid[0])
        .sort((a, b) => a[1] - b[1]);
      // console.log('whole column', wholeColumn);

      // check if column is still available
      const checkColumnAvailable = wholeColumn.filter(
        x => x[1] === 5 && x[2] === 'white'
      );

      if (checkColumnAvailable.length > 0) {
        const placeHere = wholeColumn.find(x => x[2] === 'white');
        placeHere[2] = isRedsNext ? 'red' : 'yellow';

        setBoardResult(boardResult);
        setIsRedsNext(!isRedsNext);
        setBoardHistory([...boardHistory, boardResult]);

        localStorage.setItem(
          'Game history',
          JSON.stringify([...boardHistory, boardResult])
        );

        // console.log('board result', boardResult);

        console.log('board history from place', [...boardHistory, boardResult]);

        const arrForOnlyColor = [];
        for (let i = 0; i < boardResult.length; i += 7) {
          arrForOnlyColor.push(boardResult.map(x => x[2]).slice(i, i + 7));
        }
        checkIfWin(arrForOnlyColor);
      }
    }
  };

  return (
    <InlineBlock>
      <CellBG
        onClick={() => handlePlacedLocation(eachGrid)}
        eachGrid={eachGrid}
      >
        <MarkedColor color={eachGrid[2]}>
          {` ${eachGrid[0]}, ${eachGrid[1]} `}
        </MarkedColor>
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;

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
