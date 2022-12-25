const isValidStringNumber = (number) => /^-?\d+$/.test(number);
const validateStringNumbers = (numbers) => {
    const invalidNumber = numbers.find(number=>!isValidStringNumber(number));
    if(invalidNumber){
        throw `Invalid number ${invalidNumber}`;
    }

    return true;
}

function stringSum(...numbers) {
    validateStringNumbers(numbers);
    
    const maxLength = numbers.reduce((maxLength, num)=>Math.max(maxLength, num.length), 0);

    let carry = 0;
    let zeroCounter = 0;
    let result = "";

    for(let i = maxLength - 1; i >= 0; i--){

        let digitSum = carry;
        for(let numberIndex = 0; numberIndex < numbers.length ; numberIndex ++){
            const number = numbers[numberIndex];
            const digitPos = i - (maxLength - number.length);

            if(!(digitPos >= 0 && digitPos < number.length)) {
                numbers.splice(numberIndex, 1);
                numberIndex = numberIndex - 1;
                continue;
            }

            digitSum += parseInt(number[digitPos]);
        }

        const currentDigitSum = digitSum % 10;
        zeroCounter = currentDigitSum === 0 ? zeroCounter + 1 : 0;
        result = currentDigitSum + result;
        carry = digitSum === 0? 0 : Math.floor(digitSum / 10);
    }

    if(carry > 0){
        result = carry + result;
        zeroCounter = 0;
    }
    
    zeroCounter > 0 && (result = result.slice(zeroCounter));
    
    return result;
}

export default stringSum;