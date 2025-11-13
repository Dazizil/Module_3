function findPrimes(start, end) {
    console.log('Ищем простые числа от ' + start + ' до ' + end);
    
    let startTime = Date.now();
    let primes = [];
    let lastPrintedProgress = 0;
    
    //Обрабатываем числа блоками по 10000
    for (let blockStart = start; blockStart <= end; blockStart += 10000) {
        //Конец блока = либо blockStart + 9999, либо конец диапазона 
        //Выбераем из того что меньше
        let blockEnd = Math.min(blockStart + 9999, end);
        
        //Проверяем все числа в текущем блоке
        for (let number = blockStart; number <= blockEnd; number++) {
            // 0 и 1 не являются простыми числами
            if (number < 2) continue;
            
            let isPrime = true;
            
            // Проверяем, делится ли число на что-то кроме себя и 1
            for (let divider = 2; divider * divider <= number; divider++) {
                if (number % divider === 0) {
                    isPrime = false;
                    break;
                }
            }
            
            // Если число простое, добавляем в результат
            if (isPrime) {
                primes.push(number);
            }
        }
        
        //Считаем прогресс в процентах
        let progress = Math.floor(((blockStart - start) / (end - start)) * 100);
        
        //Выводим прогресс каждые 10%
        if (progress >= lastPrintedProgress + 10) {
            lastPrintedProgress = progress;
            console.log('Выполнено: ' + progress + '%');
        }
    }
    
    let endTime = Date.now();
    let timeSpent = endTime - startTime;
    
    console.log('Найдено простых чисел: ' + primes.length);
    console.log('Затрачено времени: ' + timeSpent + ' миллисекунд');
    
    return primes;
}

findPrimes(1, 100000000);