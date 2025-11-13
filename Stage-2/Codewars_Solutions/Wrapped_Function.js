//Wrapped Function
Object.defineProperty(
    Function.prototype,
    'wrap',
    {
        value:
            function (wrapper) {
                let originalFunction = this;
                //Возвращаем новую функцию-обёртку
                return function (...args) {
                    return wrapper.call(this, originalFunction, ...args);
                };
            }
    }
);
