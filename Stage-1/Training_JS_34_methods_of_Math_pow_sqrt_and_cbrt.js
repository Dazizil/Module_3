//Training JS #34: methods of Math---pow() sqrt() and cbrt()
function cutCube(totalVolume, numberOfPieces) {
    //Проверяем, является ли объем большого куба целым числом.
    //Для этого делаем число строкой и разбиваем число на две части.
    // Первая часть в массиве - целая часть числа, вторая часть - дробная.
    let largeCubeRootParts = Math.cbrt(totalVolume).toFixed(2).toString().split('.');

    //Проверяем, является ли объем маленьких кубов целым числом по той же логике
    let smallCubeRootParts = Math.cbrt(totalVolume / numberOfPieces).toFixed(2).toString().split('.');

    if (smallCubeRootParts[1] === '00' && largeCubeRootParts[1] === '00') {
        return true;
    }

    return false;
}
