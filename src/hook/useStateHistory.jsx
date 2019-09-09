import { useState } from 'react';

const useStateHistory = initalArray => {
  const [history, setHistory] = useState(initalArray);
  const [index, setIndex] = useState(0);

  const state = history;
  console.log('state history', state);
  const setState = newResult => {
    const copyOldArrays = JSON.parse(JSON.stringify(history));
    setHistory([...copyOldArrays, newResult]);
    setIndex(index + 1);
    console.log('history', history);
  };
  let undo;
  let redo;
  if (index > 0)
    undo = () => {
      setIndex(index - 1);
      console.log('undo', history[index - 1]);
    };
  if (index < history.length - 1)
    redo = () => {
      setIndex(index + 1);
      console.log('redo', history[index + 1]);
    };

  return [
    state,
    setState,
    { history, index, setHistory, setIndex, undo, redo },
  ];
};

export default useStateHistory;
