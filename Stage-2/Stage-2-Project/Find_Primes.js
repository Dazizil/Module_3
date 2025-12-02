async function findPrimes(start, end, blockSize) {
  console.log('Ищем простые числа от ' + start + ' до ' + end);

  let startTime = Date.now();

  //Массив, в который будут помещаться промисы для каждого блока
  let blockPromises = [];

  let totalBlocks = Math.ceil((end - start + 1) / blockSize);
  let completedBlocks = 0;
  let lastReportedProgress = 0;

  for (let blockStart = start; blockStart <= end; blockStart += blockSize) {
    //Конец блока = либо blockStart + blockSize - 1, либо конец диапазона 
    //Выбераем из того что меньше
    let blockEnd = Math.min(blockStart + blockSize - 1, end);

    blockPromises.push(
      //Создание промиса для каждого блока
      new Promise((resolve) => {
        setTimeout(() => {
          let primes = [];

          //Проверяем все числа в текущем блоке
          for (let number = blockStart; number <= blockEnd; number++) {
            // Если число простое, добавляем в результат
            if (isPrime(number)) {
              primes.push(number);
            }
          }

          completedBlocks++;

          //Считаем прогресс в процентах
          let progress = Math.round((completedBlocks / totalBlocks) * 100);

          if (progress >= lastReportedProgress + 10) {
            lastReportedProgress = progress;
            console.log('Выполнено: ' + progress + '%');
          }
          
          resolve(primes);
        }, 0);
      })
    );
  }

  let results = await Promise.all(blockPromises);
  let endTime = Date.now();
  let timeSpent = endTime - startTime;

  console.log('Найдено простых чисел: ' + results.flat().length);
  console.log('Затрачено времени: ' + timeSpent + ' миллисекунд');

  return results.flat();
}

function isPrime(number) {
  // 0 и 1 не являются простыми числами
  if (number < 2) {
    return false;
  }            

  //2 - единственное четное простое число
  if (number === 2) {
    return true;
  }

  //Если число четное и не равно 2 - оно не простое
  if (number % 2 === 0) {
    return false;
  } 

  //Проверяем нечетные делители от 3 до квадратного корня числа
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  //Если не нашли ни одного делителя - число простое
  return true;
}


findPrimes(1, 1000000, 10000)
  .then(() => { 
    console.log("Выполнено!");
  })
  .catch((err) => {
    console.log(`Ошибка: ${err} :(`);
  });