//Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(twoDimensionalArray) {
    let combinedNumbers = []
    for (let i = 0; i < twoDimensionalArray.length; i++) {
        combinedNumbers = [...combinedNumbers, ...twoDimensionalArray[i]]
    }

    return combinedNumbers.sort((a, b) => a - b).reverse().join('>')
}
