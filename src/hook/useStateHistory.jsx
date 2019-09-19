import { useState } from 'react';

const useStateHistory = initalArray => {
  const [history, setHistory] = useState(initalArray);
  const [index, setIndex] = useState(-2);

  const state = history;
  console.log('state history', state);

  const setState = newResult => {
    const copyOldArrays = JSON.parse(JSON.stringify(history));
    setHistory([...copyOldArrays, newResult]);
    setIndex(index + 1);
    console.log('set history', [...copyOldArrays, newResult]);
  };

  return [state, setState, { history, index, setIndex }];
};

export default useStateHistory;
