import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../react.png';
import { SharedContext } from '../context/SharedContext';

const Header = ({ className }) => {
  const {
    playAgain,
    isRedsNext,
    playerName,
    winner,
    isLaptop,
    history,
    undo,
    redo,
    index,
  } = useContext(SharedContext);
  return (
    <div className={className}>
      <header className='header'>
        <div>
          {isLaptop && (
            <p>
              The first player to connect four of their discs
              <br />
              horizontally, vertically, or diagonally wins the game.
            </p>
          )}
          <button type='button' onClick={() => playAgain()}>
            restart
          </button>
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
        </div>
        <div className='logo-title'>
          <img src={logo} className='Header-logo' alt='logo' />
          {isLaptop && <h1 className='Header-title'>Connect Four</h1>}
        </div>
        <div className='status'>
          <div className={isRedsNext ? 'bgRed' : 'bgYellow'}>
            {winner === '' ? (
              <>
                Next Player:
                {isRedsNext ? ` ${playerName.red}` : ` ${playerName.yellow}`}
              </>
            ) : (
              <>{`Winner is ${winner}`}</>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledHeader = styled(Header)`
  text-align: center;
  margin-bottom: 10px;
  .logo-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Header-logo {
      animation: App-logo-spin 5s linear;
      perspective: 1000px;
      height: 80px;
    }

    .Header-title {
      font-size: 1.5em;
    }
  }

  .header {
    background-color: #25d8ed;
    height: 150px;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    div {
      width: 30%;
      p {
        color: #00008b;
        font-size: 22px;
      }
    }
    .status {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 400px;
        color: #00008b;
        font-size: 28px;
        border-radius: 10px;
      }
      .bgRed {
        background: red;
      }
      .bgYellow {
        background: yellow;
      }
    }
  }

  @keyframes App-logo-spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  button {
    width: 150px;
    height: 50px;
    margin: 2px 5px;
    border-radius: 20px;
    font-size: 24px;
    font-weight: 700;
    color: #00008b;
    background: #fff8dc;
    &:disabled {
      color: #8b0000;
      text-decoration: line-through;
      font-size: 12px;
    }
    &:not([disabled]):hover {
      color: #fff8dc;
      background: #00008b;
      cursor: pointer;
    }
  }
`;

StyledHeader.displayName = 'Header';

export default StyledHeader;
