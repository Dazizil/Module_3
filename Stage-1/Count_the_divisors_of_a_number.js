//Count the divisors of a number
function getDivisorsCnt(targetNumber) {
    let divisorCount = 0;
    //Проверяем только до квадратного корня из n
    for (let i = 1; i <= Math.sqrt(targetNumber); i++) {
        if (targetNumber % i === 0) {
            //Если i - делитель, то n/i тоже делитель
            divisorCount += (i * i === targetNumber) ? 1 : 2;
        }
    }
    return divisorCount;
}
