//Multiplication - Generators #2
function* generator(a) {
    let b = 1;
    while (true) {
        //Вычисляем результат умножения
        let c = a * b;

        //Возвращаем строку в требуемом формате и делаем паузу
        yield `${a} x ${b} = ${c}`;

        //Увеличиваем счетчик для следующего вызова
        b++;
    }
}
