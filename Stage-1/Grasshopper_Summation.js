//Grasshopper - Summation
let summation = function (limitNumber) {
    let sum = 0;
    for (let i = 1; i <= limitNumber; i++) {
        sum += i;
    }
    return sum;
}
