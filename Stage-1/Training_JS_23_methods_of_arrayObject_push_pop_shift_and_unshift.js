//Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
function infiniteLoop(inputArray, direction, numberOfShifts) {
    let bigArray = [...inputArray[0], ...inputArray[1], ...inputArray[2]];
    if (direction === 'left') {

        //Удаляем первый элемент и вставляем его в конец
        for (let i = 0; i < numberOfShifts; i++) {
            let firstElement = bigArray.shift();
            bigArray.push(firstElement);
        }

    } else if (direction === 'right') {

        //Удаляем последний элемент и вставляем его в начало
        for (let i = 0; i < numberOfShifts; i++) {
            let lastElement = bigArray.pop();
            bigArray.unshift(lastElement);
        }
    }

    let sizeOfFirstInputArray = inputArray[0].length;
    let sizeOfSecondInputArray = inputArray[1].length;
    let sizeOfThirdInputArray = inputArray[2].length;
    return [
        bigArray.slice(0, sizeOfFirstInputArray),
        bigArray.slice(sizeOfFirstInputArray, sizeOfFirstInputArray + sizeOfSecondInputArray),
        bigArray.slice(sizeOfFirstInputArray + sizeOfSecondInputArray, sizeOfFirstInputArray + sizeOfSecondInputArray + sizeOfThirdInputArray)
    ];
}
