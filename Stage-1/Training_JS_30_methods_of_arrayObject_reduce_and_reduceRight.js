//Training JS #30: methods of arrayObject---reduce() and reduceRight()
function tailAndHead(numberArray) {
    let sumsOfDigits = [];

    numberArray.map((currentNumber, currentIndex, array) => {
        if (currentIndex < array.length - 1) {
            let currentNumberDigits = currentNumber.toString().split('');
            let lastDigitOfCurrent = Number(currentNumberDigits[currentNumberDigits.length - 1]);
            let nextNumberDigits = array[currentIndex + 1].toString().split('');
            let firstDigitOfNext = Number(nextNumberDigits[0]);
            sumsOfDigits.push(lastDigitOfCurrent + firstDigitOfNext);
        }
    })

    return sumsOfDigits.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
}
