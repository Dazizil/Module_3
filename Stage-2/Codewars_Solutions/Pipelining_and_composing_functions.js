//Pipelining and composing functions
function pipeline(initialValue, ...functions) {
    let result = initialValue;

    //Последовательно применяем каждое преобразование
    for (let func of functions) {
        //Передаём текущее значение в следующую функцию
        //и сохраняем результат для следующей итерации
        result = func(result);
    }

    //Возвращаем финальный результат
    return result;
}

//Функция compose - создаёт новую функцию, композицию нескольких функций
//Полученная функция применяет исходные функции в обратном порядке
function compose(...functions) {
    return function (initialInput) {
        let result = initialInput;

        //Идём в обратном порядке - от последней функции к первой
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
}
