//If you can't sleep, just count sheep!!
let countSheep = function (numberOfSheep) {
    let countingPhrase = '';
    for (let i = 1; i <= numberOfSheep; i++) {
        countingPhrase += `${i} sheep...`
    }
    return countingPhrase;
}
