import stringSum from "./stringSum.js";

const sum = stringSum(
    // "0000009111111111111111111111111111111111111111",
    // "7111111111111111111111111111111111111111",
    // "8111111111111111111111111111111111111111",
    // "9111111111111111111111111111111111111111",
    // "9111111111111111111111111111111111111119"

    "1",
    "11",
    "111",
    "1000000000000000000000020000000000000000000000200000000000000000000002000000000000000000000020000000000000000000000200000000000000000000002000000000000000000000020000000000000000000000200000000000000000000002",
    "1000000000000000000000020000000000000000000000200000000000000000000002000000000000000000000020000000000000000000000200000000000000000000002000000000000000000000020000000000000000000000200000000000000000000002"
);
console.log(`String sum ${sum}`);