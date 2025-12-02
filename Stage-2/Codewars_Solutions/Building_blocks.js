//Building blocks
class Block {
    constructor(data) {
        let [width, length, height] = data;
        this.width = width;
        this.length = length;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }


    getHeight() {
        return this.height;
    }

    //Вычисляем объем по формуле (width * height * length)
    getVolume() {
        return this.width * this.length * this.height;
    }

    //Вычисляем площадь поверхности по формуле: 2×(width*length + width*height + length*height)
    getSurfaceArea() {
        return 2 * (this.width * this.length + this.width * this.height + this.length * this.height);
    }
}
