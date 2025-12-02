//Создаем объект с несколькими свойствами
let person = {
    name: 'John',
    age: 30,
    job: 'Developer'
};

//Выводим дескрипторы свойств до изменений
console.log('Исходные дескрипторы свойств:');
console.log('name:', Object.getOwnPropertyDescriptor(person, 'name'));
console.log('age:', Object.getOwnPropertyDescriptor(person, 'age'));
console.log('job:', Object.getOwnPropertyDescriptor(person, 'job'));

//Изменяем дескрипторы свойств: только для чтения, неперечисляемые, ненастраиваемые
Object.defineProperty(person, 'name', {
    value: person.name,
    writable: false,
    enumerable: false,
    configurable: false
});

Object.defineProperty(person, 'age', {
    value: person.age,
    writable: false,
    enumerable: false,
    configurable: false
});

Object.defineProperty(person, 'job', {
    value: person.job,
    writable: false,
    enumerable: false,
    configurable: false
});

//Выводим измененные дескрипторы
console.log('\nИзмененные дескрипторы:');
console.log('name:', Object.getOwnPropertyDescriptor(person, 'name'));
console.log('age:', Object.getOwnPropertyDescriptor(person, 'age'));
console.log('job:', Object.getOwnPropertyDescriptor(person, 'job'));

//Демонстрируем эффекты измененных дескрипторов
console.log('\nДемонстрация эффектов измененных дескрипторов');

//Проверяем перезаписывание 
console.log('\nТестируем перезаписывание (writable: false):');
console.log('Исходное имя:', person.name);
person.name = 'Mike';
console.log('После попытки изменить имя на "Mike":', person.name);

//Проверяем перечисление 
console.log('\nТестируем перечисление (enumerable: false):');
console.log('Object.keys(person):', Object.keys(person));
console.log('for in цикл:');
for (let key in person) {
    console.log(key);
}
console.log('JSON.stringify:', JSON.stringify(person));

//Проверяем удаление
console.log('\nТестируем удаление (configurable: false):');
console.log('До удаления - есть ли age у person:', 'age' in person);
delete person.age;
console.log('После удаления - есть ли age у person:', 'age' in person);
console.log('Значение age:', person.age);

//Проверяем перенастройку
console.log('\nТестируем перенастройку (configurable: false):');
try {
    Object.defineProperty(person, 'job', {
        writable: true 
    });
    console.log('Перенастройка удалась');
} catch (error) {
    console.log('Перенастройка не удалась:', error.message);
}
