// Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(red, green, blue) {
    let redHex = red.toString(16).padStart(2, '0');
    let greenHex = green.toString(16).padStart(2, '0');
    let blueHex = blue.toString(16).padStart(2, '0');

    return `#${redHex}${greenHex}${blueHex}`;
}
