//Training JS #28: methods of arrayObject---every() and some()
function mirrorImage(inputArray) {
    for (let i = 0; i < inputArray.length - 1; i++) {
        let firstVerifiableNumber = inputArray[i];
        let secondVerifiableNumber = inputArray[i + 1];

        //Отзеркаливаем второе число
        let reversedSecondVerifiableNumber = Number(secondVerifiableNumber.toString().split('').reverse().join(''));

        //Проверяем, равно ли первое проверяемое число второму отзеркаленному числу
        if (firstVerifiableNumber === reversedSecondVerifiableNumber) {
            return [firstVerifiableNumber, secondVerifiableNumber];
        }
    }

    return [-1, -1];
}
