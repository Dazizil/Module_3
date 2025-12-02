//Concatenating functions
// Добавляем метод pipe в прототип Function
Function.prototype.pipe = function (...functions) {
    let initialFunction = this;

    return function (input) {
        // Начинаем с вызова исходной функции
        let result = initialFunction(input);

        // Последовательно применяем все переданные функции
        for (let func of functions) {
            result = func(result);
        }

        return result;
    };
};
