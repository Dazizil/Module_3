//Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(inputNumber) {
    let [integerPart, decimalPart] = inputNumber.toString().split('.');

    if (integerPart.length < decimalPart.length) {
        return Math.ceil(inputNumber);
    } else if (integerPart.length > decimalPart.length) {
        return Math.floor(inputNumber);
    } else {
        return Math.round(inputNumber);
    }
}
