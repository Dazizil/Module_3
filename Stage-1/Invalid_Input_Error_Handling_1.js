//Invalid Input - Error Handling #1
function getCount(input) {
    // Проверяем, является ли входное значение строкой
    if (typeof input !== 'string') {
        return {vowels: 0, consonants: 0};
    }

    let vowelsCount = 0;
    let consonantsCount = 0;

    //Преобразуем строку к нижнему регистру
    let lowerCaseString = input.toLowerCase();

    //Проходимся по каждому символу строки
    for (let i = 0; i < lowerCaseString.length; i++) {
        let character = lowerCaseString[i];

        //Проверяем, является ли символ буквой
        if (character >= 'a' && character <= 'z') {
            //Проверяем, является ли буква гласной
            if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }

    return {vowels: vowelsCount, consonants: consonantsCount};
}
