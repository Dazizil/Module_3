//Persistent Bugger.
function persistence(inputNumber) {
    let currentNumber = inputNumber;
    let stepsCount = 0;

    // Продолжаем пока число не станет однозначным
    while (currentNumber >= 10) {
        // Преобразуем число в массив цифр
        let digitsArray = String(currentNumber).split('').map(Number);

        // Умножаем все цифры
        currentNumber = digitsArray.reduce((product, digit) => product * digit, 1);

        stepsCount++;
    }

    return stepsCount;
}
