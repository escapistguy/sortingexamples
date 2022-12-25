import {ordComp} from './sortUtils.js';

function countSort(arr, asc = true) {
  if (arr.length < 2) return arr;

  let min = null;
  let max = null;

  const countArr = arr.reduce((countArr, num)=>{
    countArr[num] == null && (countArr[num] = 0);
    countArr[num]++;
    min = min == null? num : Math.min(min, num);
    max = max == null? num : Math.max(max, num);
    return countArr;
  }, []);

  let sortedArr = [];
  for(let i = asc? min : max; ordComp(i, asc? max : min, asc); asc? i++ : i--){
    typeof countArr[i] == "number" && 
      (sortedArr = sortedArr.concat(new Array(countArr[i]).fill(i)));
  }
  
  return sortedArr
};

export default countSort;