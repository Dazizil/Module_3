// Хранилище скидок
let ProductsDiscount = new Map();

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setDiscount(discount) {
        ProductsDiscount.set(this, discount);
    }

    getDiscount() {
        return ProductsDiscount.get(this);
    }
}

//Создаем продукты
console.log('Создаем продукты:');
let product1 = new Product('Ноутбук', 50000);
console.log(`Название: ${product1.name}, цена:${product1.price}`);
let product2 = new Product('Телефон', 30000);
console.log(`Название: ${product2.name}, цена:${product2.price}`);
let product3 = new Product('Наушники', 5000);
console.log(`Название: ${product3.name}, цена:${product3.price}`);

//Ставим скидки
console.log('\nСтавим скидки');
product1.setDiscount(15);
product2.setDiscount(10);
product3.setDiscount(20);

//Проверяем скидки
console.log('\nПроверяем скидки:');
console.log('Ноутбук:', product1.getDiscount() + '%');
console.log('Телефон:', product2.getDiscount() + '%');
console.log('Наушники:', product3.getDiscount() + '%');

//Проверяем что в хранилище
console.log('\nВ хранилище скидок:');
console.log('Есть скидка на ноутбук:', ProductsDiscount.has(product1));
console.log('Есть скидка на телефон:', ProductsDiscount.has(product2));
console.log('Есть скидка на наушники:', ProductsDiscount.has(product3));

//Удаляем телефон
console.log('\nУдаляем телефон...');
product2 = null;

//Проверяем изменения
console.log('\nПосле удаления телефона:');
console.log('Есть скидка на ноутбук:', ProductsDiscount.has(product1));
console.log('Есть скидка на телефон:', ProductsDiscount.has(product2));
console.log('Есть скидка на наушники:', ProductsDiscount.has(product3));

console.log('\nОстались продукты:');
console.log('Ноутбук:', product1.getDiscount() + '%');
console.log('Наушники:', product3.getDiscount() + '%');
