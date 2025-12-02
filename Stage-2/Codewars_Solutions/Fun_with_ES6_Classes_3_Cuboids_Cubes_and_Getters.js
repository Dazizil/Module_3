//Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    //Вычисляем площадь поверхности по формуле: 2×(width*length + width*height + length*height)
    get surfaceArea() {
        return 2 * (this.length * this.width + this.width * this.height + this.length * this.height)
    }

    get volume() {
        return this.length * this.width * this.height;
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}
