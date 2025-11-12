//Training JS #9: loop statement --while and do..while
function padIt(inputString, paddingCount) {
    while (paddingCount > 0) {
        if (paddingCount % 2 === 0) {
            inputString = inputString + '*';  // Добавляем справа
        } else {
            inputString = '*' + inputString;  // Добавляем слева
        }
        paddingCount--;
    }

    return inputString;
}
