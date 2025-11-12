//Training JS #10: loop statement --for
function pickIt(arrayOfNumbers) {
    let arrayOfOddNumbers = [], arrayOfEvenNumbers = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 === 0) {
            arrayOfEvenNumbers.push(arrayOfNumbers[i]);
        } else {
            arrayOfOddNumbers.push(arrayOfNumbers[i]);
        }
    }
    return [arrayOfOddNumbers, arrayOfEvenNumbers];
}
