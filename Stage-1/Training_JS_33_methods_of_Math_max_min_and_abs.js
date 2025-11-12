//Training JS #33: methods of Math---max() min() and abs()
function maxMin(arrayOfNumbers1, arrayOfNumbers2) {
    let differences = [];
    for (let i = 0; i < arrayOfNumbers1.length; i++) {
        differences.push(Math.abs(arrayOfNumbers1[i] - arrayOfNumbers2[i]));
    }

    let minValue = differences[0];
    let maxValue = differences[0];

    for (let i = 0; i < differences.length; i++) {
        if (minValue > differences[i]) {
            minValue = differences[i];
        }
        if (maxValue < differences[i]) {
            maxValue = differences[i];
        }
    }

    return [maxValue, minValue];
}

