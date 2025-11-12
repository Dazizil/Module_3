//Training JS #24: methods of arrayObject---splice() and slice()
function threeInOne(inputArray) {
    let summedGroups = [];

    //Суммируем каждые 3 элемента входного массива, после чего добавляем результат в массив
    for (let i = 0; i < inputArray.length; i += 3) {
        let currentGroupSum = inputArray[i] + (inputArray[i + 1]) + (inputArray[i + 2]);
        summedGroups.push(currentGroupSum);
    }

    return summedGroups;
}
