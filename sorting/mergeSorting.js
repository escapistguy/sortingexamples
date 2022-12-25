import {ordComp} from './sortUtils.js';

const mergeSortedArrays = (left, right, asc = true) => {
  if (left.length <= 1 && right.length <= 1)
    return !left.length || !right.length || ordComp(left[0], right[0], asc)
      ? [...left, ...right]
      : [...right, ...left];

  /** merged result */
  let result = [];

  /** define initial active queue */
  let queue = ordComp(left[0], right[0], asc) ? [left, right] : [right, left];

  /** while both queues have pending items */
  while (left.length && right.length) {
    /** while active queue has the lowest starting value */
    while (queue[0].length && ordComp(queue[0][0], queue[1][0], asc)) {
      result.push(queue[0].shift());
    }

    /** if active queue is empty, fill the result array with the pending queue */
    if (!queue[0].length && queue[1].length) {
      result = [...result, ...queue[1].splice(0, queue[1].length)];
      break;
    }

    /** shift active queue */
    [queue[0], queue[1]] = [queue[1], queue[0]];
  }

  return result;
};

function mergeSort(unsortedNumbers, asc = true) {
  if (unsortedNumbers.length < 2) return unsortedNumbers;

  let middle = Math.floor(unsortedNumbers.length / 2);
  let left = mergeSort(unsortedNumbers.slice(0, middle), asc);
  let right = mergeSort(unsortedNumbers.slice(middle), asc);

  return mergeSortedArrays(left, right, asc);
};

export default mergeSort;