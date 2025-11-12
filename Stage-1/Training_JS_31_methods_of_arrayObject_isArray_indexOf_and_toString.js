//Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(inputArray) {
    if (Array.isArray(inputArray)) {
        if (inputArray.indexOf(5) !== -1 && inputArray.indexOf(13) !== -1) {
            return "It's a black array"
        }
        if (inputArray.indexOf(5) !== -1 || inputArray.indexOf(13) !== -1 || Array.isArray(inputArray)) {
            return "It's a white array"
        }
    }

    return "It's a fake array";
}
