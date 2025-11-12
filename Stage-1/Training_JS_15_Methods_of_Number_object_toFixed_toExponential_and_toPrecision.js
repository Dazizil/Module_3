//Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
function howManySmaller(arr, n) {
    //Округляем все элементы массива до двух десятичных знаков
    let roundedArray = arr.map(num => Number(num.toFixed(2)));

    //Считаем элементы меньше n
    let count = 0;
    for (let num of roundedArray) {
        if (num < n) {
            count++;
        }
    }

    return count;
}
