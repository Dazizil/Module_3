//Count strings in objects
function strCount(obj) {
    let stringCount = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringCount++;
        } else if (typeof obj[key] === 'object') {
            //Глубокая проверка объектов и массивов
            stringCount += strCount(obj[key]);
        }
    }

    return stringCount;
}
