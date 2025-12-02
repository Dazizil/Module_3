//Function Cache
function cache(func) {
    let cacheMap = new Map();

    return function (...args) {
        let key = JSON.stringify(args);

        if (cacheMap.has(key)) {
            return cacheMap.get(key);
        }

        let result = func.apply(this, args);
        cacheMap.set(key, result);

        return result;
    }
}
