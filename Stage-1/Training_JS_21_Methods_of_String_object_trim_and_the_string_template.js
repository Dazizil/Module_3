//Training JS #21: Methods of String object--trim() and the string template
function fiveLine(inputString) {
    let trimmedString = inputString.trim();
    return `${trimmedString}\n${trimmedString.repeat(2)}\n${trimmedString.repeat(3)}\n${trimmedString.repeat(4)}\n${trimmedString.repeat(5)}`
}
