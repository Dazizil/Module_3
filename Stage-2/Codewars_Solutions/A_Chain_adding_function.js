//A Chain adding function
function add(n) {
    //Функция, которая будет запоминать сумму
    let innerFunction = function (x) {
        return add(n + x);
    };

    //Преобразование в примитив
    innerFunction.valueOf = function () {
        return n;
    };

    return innerFunction;
}
