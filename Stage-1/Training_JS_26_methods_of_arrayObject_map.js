//Training JS #26: methods of arrayObject---map()
function isolateIt(inputArray) {
    return inputArray.map(element => {

        //Если длина строки нечетная, удаляем букву/цифру/знак, стоящий на положении n/2 + 0.5
        //Например, если длина строки 5, то удаляем элемент на позиции 5/2 + 0.5 = 2.5 + 0.5 = 3
        if (element.length % 2 !== 0) {
            element = element.slice(0, Math.floor(element.length / 2)) + element.slice(element.length / 2 + 1, element.length)
        }

        //Делим строку на две части
        let firstPart = element.slice(0, element.length / 2)
        let secondPart = element.slice(element.length / 2, element.length)

        //Вставляем '|' между этими двумя частями
        let splittedWord = [firstPart, '|', secondPart];
        return splittedWord.join('');
    })
}
