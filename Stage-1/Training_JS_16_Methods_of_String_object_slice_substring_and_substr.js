// Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(wordsArray) {
    let minLength = wordsArray[0].length;

    for (let word of wordsArray) {
        if (minLength > word.length) {
            minLength = word.length;
        }
    }

    //Обрезаем каждое слово
    let trimmedWords = wordsArray.map(word => word.substring(0, minLength));
    return trimmedWords;
}
