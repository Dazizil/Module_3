//Power .bind()
Function.prototype.bind = function (context) {
    let fn = this;
    let currentContext = context;

    let bound = function () {
        return fn.apply(currentContext, arguments);
    };

    // Переопределяем bind для возвращаемой функции
    bound.bind = function (newContext) {
        currentContext = newContext;
        return bound;
    };

    return bound;
};
