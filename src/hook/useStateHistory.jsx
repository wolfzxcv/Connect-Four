import { useState } from 'react';

const useStateHistory = initalArray => {
  const [history, setHistory] = useState(initalArray);
  const [index, setIndex] = useState(-2);

  const state = history;

  const setState = newResult => {
    const copyOldArrays = JSON.parse(JSON.stringify(history));
    setHistory([...copyOldArrays, newResult]);
    setIndex(index + 1);
    // dunno why the last 2 data would be the same, so I remove the last one
    console.log('set history', [...copyOldArrays, newResult].slice(0, -1));
  };

  return [state, setState, { history, index, setIndex }];
};

export default useStateHistory;
