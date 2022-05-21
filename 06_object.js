// ***OBJECT*** 
// const person = {
//     name: 'Danya',
//     age: 23,
//     isProgrammer: true,
//     languages: ['ru', 'en', 'de'],
//     'complex key': 'Complex Value',
//     ['key_' + (1 + 3)]: 'Computed key',
//     greet() {                                       //метод
//         console.log('greet from person')
//     }
// }

// console.log(person.name);
// const ageKey = 'age';
// console.log(person['age']);
// console.log(person['complex key']);
// console.log(person);
// person.greet();

// person.age++;                         //изменить элемент объекта
// person.languages.push('by');          //добавить элемент объекта
// delete person['key_4'];               //удалить элемент объекта
// console.log(person);
// console.log(person['key_4']);


//***Новый синтаксис для работы с объектами***
//деструктуризация

// const name = person.name;                           //без деструктуризации
// const age = person.age;
// const languages = person.languages;

// const {name, age: personAge = 18, languages} = person; //с деструктуризацией (если надо поменять имя - исп ":", если надо значение по умолчанию - "=")

// console.log(name, personAge, languages);


//***итерация внутри объектов***
                        //объекты не итерируемые, поэтому, в отличии от массива, нельзя использовать циклы
                        //тут цикл for (... of ...) преобразуется в for (... in ...)
                        //НО! ЦИКЛ FOR IN ОПАСЕН! он может заходить в прототип и цепльть что-то с низких уровней
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {       //условие безопасности for in (только собственные параметры)
//     console.log('key: ', key);
//     console.log('value: ', person[key]);
// }
// }

//***современный способ итерации по объекту***
// const keys = Object.keys(person);           //метод .keys получает ключи объекта
// keys.forEach((key) => {
//     console.log('key: ', key);
//     console.log('value ', person[key]);
// })

//***контекст***                                  мало что понял тут
// const person = {
//     name: 'Danya',
//     age: 23,
//     isProgrammer: true,
//     languages: ['ru', 'en', 'de'],
//     'complex key': 'Complex Value',
//     ['key_' + (1 + 3)]: 'Computed key',
//     greet() {                                       //метод
//         console.log('greet from person')
//     },
//     info() {
//         console.info('Информация о человеке по имени: ', this.name); // тут person.name тоже самое что this.name
//     }
// }

// person.info();

const logger = {
    keys() {
        console.log('object keys: ', Object.keys(this));
    },
    keysAndValues() {
        const keys = Object.keys(logger);
        keys.forEach((key) => {
            console.log('key: ', key);
            console.log('value: ', this[key])
        })
    }
}
logger.keysAndValues();

// const bound = logger.keys.bind(person);
// bound();
// logger.keys.call(person)