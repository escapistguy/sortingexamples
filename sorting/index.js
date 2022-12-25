import radixSort from "./radixSorting.js";
import countSort from "./countSorting.js";
import mergeSort from "./mergeSorting.js";
import quickSort from "./quickSorting.js";

import {getUnsortedNumbers, testSorting} from './sortUtils.js';

const unsortedNumbers = getUnsortedNumbers(100_000);

const results = [
    testSorting(countSort, [...unsortedNumbers]),
    testSorting(mergeSort, [...unsortedNumbers]),
    testSorting(quickSort, [...unsortedNumbers]),
    testSorting(radixSort, [...unsortedNumbers])
];

const sortedResults = results.sort((a,b)=>a.perfRes - b.perfRes);
const winner = sortedResults.shift();

console.log(`The winner is: ${winner.sortFn.name}!!!\nTime diffs\n${
    sortedResults.map(res=>`VS ${res.sortFn.name}: ${res.perfRes - winner.perfRes}ms`).join("\n")
}`);

