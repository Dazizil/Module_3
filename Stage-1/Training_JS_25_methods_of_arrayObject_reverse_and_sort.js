//Training JS #25: methods of arrayObject---reverse() and sort()
function sortIt(inputArray) {
    const sortedArray = [...inputArray];

    //Создаем объект для частот
    const frequency = {};

    //Заполняем частоты
    inputArray.forEach(num => {
        frequency[num] = (frequency[num] ?? 0) + 1;
    });

    //Теперь сортируем используя frequency.
    // Если чистоты отличаются и если a встречается реже чем b, то a идет перед b.
    // Если частоты одинаковые, то сортируем в порядке убывания
    return sortedArray.sort((a, b) => {
        if (frequency[a] !== frequency[b]) {
            return frequency[a] - frequency[b];
        }
        return b - a;
    });
}
