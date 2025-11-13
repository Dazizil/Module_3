//Basics - Generators #1
function* generator() {
    let counter = 1;
    while (true) {
        //yield приостанавливает выполнение и возвращает counter
        //resetValue получает значение, переданное в next()
        let resetValue = yield counter;

        if (resetValue !== undefined) {
            counter = resetValue;
        } else {
            counter++;
        }
    }
}
