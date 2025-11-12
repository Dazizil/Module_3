//Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(originalString, separator) {
    //Разделяем строку на отдельные слова
    let wordArray = originalString.split(' ');

    //Разделяем слова на буквы
    let characterArrays = wordArray.map(word => word.split(''));

    //Вставляем в слова разделитель
    let mergedWords = characterArrays.map(characters => characters.join(separator));

    //Собираем измененную строку обратно
    return mergedWords.join(' ');
}
