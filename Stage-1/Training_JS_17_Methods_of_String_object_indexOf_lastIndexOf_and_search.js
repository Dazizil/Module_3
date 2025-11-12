//Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(inputString, desiredChar) {
    if (inputString.search(desiredChar) !== -1) {
        return inputString.lastIndexOf(desiredChar) - inputString.indexOf(desiredChar);
    }

    return -1;
}

