//Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
function alienLanguage(inputString) {
    let uppercaseWords = inputString.toUpperCase().split(' ');

    //Добавляем все символы каждого слова в верхнем регистре кроме последнего, а последний символ делаем нижнего регистра
    let transformedWords = uppercaseWords.map((word) => (word.substring(0, word.length - 1)).concat(word[word.length - 1].toLowerCase()));

    return transformedWords.join(' ')
}
