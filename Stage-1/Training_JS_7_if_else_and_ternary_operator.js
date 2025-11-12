//Training JS #7: if..else and ternary operator
function saleHotdogs(numberOfHotdogs) {
    return numberOfHotdogs < 5 ? 100 * numberOfHotdogs : numberOfHotdogs >= 5 && numberOfHotdogs < 10 ? 95 * numberOfHotdogs : 90 * numberOfHotdogs;
}
