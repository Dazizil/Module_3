//Fibonacci Generator Function
//Числа Фибоначчи — это последовательность чисел, где каждое последующее число является суммой двух предыдущих, начиная с 0 и 1
//Последовательность выглядит так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 и так далее, и она продолжается бесконечно
function* fibonacci() {
    let previousNumber = 0;
    let currentNumber = 1;

    yield previousNumber;

    while (true) {
        yield currentNumber;
        let nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
    }
}
