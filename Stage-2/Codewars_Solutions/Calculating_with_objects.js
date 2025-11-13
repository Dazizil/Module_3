//Calculating with objects
//Добавляем метод к существующему классу
//Symbol.toPrimitive - это специальный символ в JavaScript, который определяет, как объект должен преобразовываться в примитивное значение
//Когда JS прытается использовать объект как примитив, то он вызывает этот метод
Num.prototype[Symbol.toPrimitive] = function (type) {
    if (type === 'number' || type === 'default') {
        return this.num;
    }
    return this.toString();
};
