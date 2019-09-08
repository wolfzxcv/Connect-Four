import { useState } from 'react';

const useStateHistory = initalArray => {
  const [history, setHistory] = useState(initalArray);
  const [index, setIndex] = useState(0);

  const state = history[index];
  const setState = newState => {
    setHistory(history => history.slice(0, index + 1).concat(newState));
    setIndex(index => index + 1);
  };
  let undo, redo;
  if (index > 0) undo = () => setIndex(index => index - 1);
  if (index < history.length - 1) redo = () => setIndex(index => index + 1);

  return [
    state,
    setState,
    { history, index, setHistory, setIndex, undo, redo },
  ];
};

export default useStateHistory;
