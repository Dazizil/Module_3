//Anonymous Returns.
name = 'The Window';

let alpha = {
    name: 'My Alpha',
    getNameFunc: function () {
        //Стрелочная функция наследует this от внешней функции getNameFunc, где this гарантированно указывает на объект alpha
        return () => {
            return this.name;
        };
    }
};
