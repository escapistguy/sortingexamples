const getDigit = (num, digit) => Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;

const getDigitCount = (num) => num == 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const getMaxDigitCount = (arr) => arr.reduce((maxDigitCount, num) => Math.max(maxDigitCount, getDigitCount(num)), 0);

function radixSort(arr, asc = true) {
  if (arr.length < 2) return arr;

  const maxDigitCount = getMaxDigitCount(arr);
  
  for(let digit = 0; digit < maxDigitCount; digit++){
    const buckets = Array.from({length: 10}, ()=> []);
    arr.forEach(num => buckets[[getDigit(num, digit)]].push(num));

    arr = [].concat(...(asc? buckets : buckets.reverse()));
  }

  return arr;
};
console.log(getDigitCount(123.456));
export default radixSort;