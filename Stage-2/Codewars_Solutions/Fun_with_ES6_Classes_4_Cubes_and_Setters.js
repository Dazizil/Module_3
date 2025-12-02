//Fun with ES6 Classes #4 - Cubes and Setters
class Cube {
    constructor(length) {
        this.length = length;
    }

    get surfaceArea() {
        //Площадь поверхности: 6 * (длина)^2
        return 6 * this.length ** 2;
    }

    get volume() {
        //Объем: (длина)^3
        return this.length ** 3;
    }

    set surfaceArea(newArea) {
        //Новая длина = (площадь / 6)
        this.length = Math.sqrt(newArea / 6);
    }

    set volume(newVolume) {
        //Новая длина = кубический корень из объема
        this.length = Math.cbrt(newVolume);
    }
}
