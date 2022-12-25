export const getRandomNumber = () => Math.floor(Math.random() * 10000 + 1);

export const ordComp = (a, b, asc = true) => (asc ? a <= b : a >= b);

export const isSorted = (arr, asc = true) =>
  arr.every((v, i, a) => !i || ordComp(a[i - 1], v, asc));

export const getUnsortedNumbers = (size = 100_000) => Array.from({length: size}, getRandomNumber);

export const displayMemoryUsage = () => {
    const used = process.memoryUsage();
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

export const testSorting = (sortFn, unsortedNumbers, ascOrder = true, displaySortedNumbers = false) => {
    //Note: must enable gc global exposure --expose-gc in order to force Garbage Collection
    global.gc();
    const t0 = performance.now();
    const sortedNumbers = sortFn(unsortedNumbers, ascOrder);
    const t1 = performance.now();
    const perfRes = Math.round(t1 - t0);
    const title = `Test Sorting Performance: ${sortFn.name} ------------------------------`;
    console.log(title);

    displaySortedNumbers && console.log(JSON.stringify(sortedNumbers));
    
    displayMemoryUsage();

    console.log(`Data length: ${unsortedNumbers.length}`);
    console.log(`Data is sorted: ${isSorted(sortedNumbers, ascOrder)}`);
    console.log(`Sorting function ${sortFn.name} took ~${perfRes} milliseconds.`);
    console.log(new Array(title.length).fill("-").join(""));

    return {sortFn, perfRes};
}