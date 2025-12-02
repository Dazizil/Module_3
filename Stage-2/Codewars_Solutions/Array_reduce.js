//Array#reduce
Array.prototype.reduce = function (process, initialValue) {
    let accumulator;
    let startIndex;

    // Определяем начальное значение и стартовый индекс
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        // Если initial не передан, берем первый элемент как начальное значение
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = this[0];
        startIndex = 1;
    }

    //Проходимся по массиву и применяем функцию
    for (let i = startIndex; i < this.length; i++) {
        //Передаем в функцию текущее накопленное значение, текущий элемент массива, текущий индекс, исходный массив
        accumulator = process(accumulator, this[i], i, this);
    }

    return accumulator;
};
