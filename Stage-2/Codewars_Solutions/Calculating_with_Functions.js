//Calculating with Functions
//Пример работы этой программы
//seven(times(five()));
//
//1: five() - возвращает 5
//2: times(5) - возвращает функцию function(left) { return left * 5; }
//3: seven(function(left) { return left * 5; }) - применяет функцию к 7
//4: Результат: 7 * 5 = 35
function zero(callback) {
    if (callback) {
        return callback(0);
    }

    return 0
}

function one(callback) {
    if (callback) {
        return callback(1);
    }

    return 1
}

function two(callback) {
    if (callback) {
        return callback(2);
    }

    return 2
}

function three(callback) {
    if (callback) {
        return callback(3);
    }

    return 3
}

function four(callback) {
    if (callback) {
        return callback(4);
    }

    return 4
}

function five(callback) {
    if (callback) {
        return callback(5);
    }

    return 5
}

function six(callback) {
    if (callback) {
        return callback(6);
    }

    return 6
}

function seven(callback) {
    if (callback) {
        return callback(7);
    }

    return 7
}

function eight(callback) {
    if (callback) {
        return callback(8);
    }

    return 8
}

function nine(callback) {
    if (callback) {
        return callback(9);
    }

    return 9
}

function plus(rightOperand) {
    return function (leftOperand) {
        return leftOperand + rightOperand;
    }
}

function minus(rightOperand) {
    return function (leftOperand) {
        return leftOperand - rightOperand;
    }
}

function times(rightOperand) {
    return function (leftOperand) {
        return leftOperand * rightOperand;
    }
}

function dividedBy(rightOperand) {
    return function (leftOperand) {
        return Math.floor(leftOperand / rightOperand);
    };
}

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
