//Training JS #37: Unlock new weapon---RegExp Object
function countAnimals(animals, count) {
    let resultArray = [];

    for (let i = 0; i < count.length; i++) {
        //Создаём регулярное выражение с флагом g для поиска всех вхождений
        let regex = new RegExp(count[i], 'g');
        let matches = animals.match(regex);

        //Если совпадений нет - вернётся null, иначе массив совпадений
        if (matches === null) {
            resultArray.push(0);
        } else {
            resultArray.push(matches.length);
        }
    }

    return resultArray;
}
