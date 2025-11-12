//Training JS #8: Conditional statement--switch
function howManydays(monthNumber) {
    let daysInMonth;
    switch (monthNumber) {
        case 2:
            daysInMonth = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;
        default:
            daysInMonth = 31;
    }
    return daysInMonth;
}
