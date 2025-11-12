//Training Time
function shuffleIt(inputArray, ...swapPairs) {
    for (let pair of swapPairs) {
        let [firstIndex, secondIndex] = pair;

        [inputArray[firstIndex], inputArray[secondIndex]] = [inputArray[secondIndex], inputArray[firstIndex]];
    }

    return inputArray;
}
