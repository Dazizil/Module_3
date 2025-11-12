//Sum of Multiples
function sumOFMultiples(divisor, limit) {
    if (limit <= 0) {
        return 'INVALID';
    }

    let arrayOfSuitableNumbers = [];

    for (let i = 0; i < limit; i++) {
        if (i % divisor === 0) {
            arrayOfSuitableNumbers.push(i);
        }
    }
    return arrayOfSuitableNumbers.reduce((sum, currentValue) => sum += currentValue, 0);
}
