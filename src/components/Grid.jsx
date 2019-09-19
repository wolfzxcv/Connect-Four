import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SharedContext } from '../context/SharedContext';

const Grid = ({ eachGrid }) => {
  const {
    boardResult,
    setBoardResult,
    isRedsNext,
    setIsRedsNext,
    checkIfWin,
    winner,
    index,
    stopGame,
    setBoardHistory,
    history,
  } = useContext(SharedContext);

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

        if (history.length > index + 2) {
          history.splice(index + 1);
          console.log('current index ', index);
          console.log(
            'history.length if remove',
            history.splice(index + 1).length
          );
        }

        const playAudio = () => {
          const sound = new Audio(
            'http://www.chiptape.com/chiptape/sounds/medium/drop.wav'
          );
          const playPromise = sound.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Automatic playback started!
                // Show playing UI.
                // console.log('audio played auto');
              })
              .catch(() => {
                // Auto-play was prevented
                // Show paused UI.
                console.log('playback prevented');
              });
          }
        };
        playAudio();

        setBoardResult(boardResult);
        setBoardHistory(boardResult);
        // console.log('place would be last history', boardHistory);
        setIsRedsNext(!isRedsNext);
        // console.log('result history.length', history.length + 1);

        localStorage.setItem('Game result', JSON.stringify(boardResult));

        const arrForOnlyColor = [];
        for (let i = 0; i < boardResult.length; i += 7) {
          arrForOnlyColor.push(boardResult.map(x => x[2]).slice(i, i + 7));
        }
        //   console.log('current board', arrForOnlyColor);
        checkIfWin(arrForOnlyColor);
      }
    } else if (stopGame) {
      alert(`Winner is ${winner}`);
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
