//Deep Freeze
Object.deepFreeze = function (object) {
    if (object === null || typeof object !== 'object') return object;

    Object.freeze(object);

    for (let key of Object.getOwnPropertyNames(object)) {
        if (object[key] !== null && typeof object[key] === 'object') {
            Object.deepFreeze(object[key]);
        }
    }

    return object;
};
