//The Enigma Machine - Part 1: The Plugboard
Plugboard = function (wires) {
    //Валидация входных данных
    if (wires === undefined) wires = '';

    if (wires.length % 2 !== 0) {
        throw new Error('Odd number of wires');
    }
    if (wires.length > 20) {
        throw new Error('Too many wires');
    }

    let wireArray = wires.split('');

    if (new Set(wireArray).size !== wireArray.length) {
        throw new Error('Duplicate wires');
    }

    if (!wireArray.every(c => c >= 'A' && c <= 'Z')) {
        throw new Error('Invalid characters');
    }

    //Создаем объект mapping для связей
    let mapping = {};
    for (let i = 0; i < wires.length; i += 2) {
        let a = wires[i];
        let b = wires[i + 1];
        mapping[a] = b;
        mapping[b] = a;
    }

    // Возвращаем объект с методом process
    return {
        process: function (wire) {
            //Если символ не одна из букв A-Z, просто возвращаем этот символ
            if (wire.length !== 1 || wire < 'A' || wire > 'Z') {
                return wire;
            }

            //Если есть соединение возвращаем парную букву, иначе возвращаем исходную букву
            return mapping[wire] || wire;
        }
    };
};
