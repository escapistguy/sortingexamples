import {ordComp} from './sortUtils.js';

function quickSort(arr, asc = true){
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++)
    for (let j = i; j > 0 && ordComp(arr[j], arr[j - 1], asc); j--)
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

  return arr;
};

export default quickSort;