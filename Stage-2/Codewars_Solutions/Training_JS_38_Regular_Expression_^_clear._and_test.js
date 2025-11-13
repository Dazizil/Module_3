//Training JS #38: Regular Expression--"^","$", "." and test()
function findSimilarity(inputString, sampleWord) {
    //Знак ^ показывает на начало строки, $ - на конец. "." - означает любой символ.
    let regExp = new RegExp('^' + sampleWord[0] + '.'.repeat(sampleWord.length - 2) + sampleWord[sampleWord.length - 1] + '$');
    return inputString.split(' ').filter(word => word.match(regExp)).join(' ');
}
