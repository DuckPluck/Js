// ---------------------------------------------------------------------------------------- ***OBJECT*** 
// const person = {
//     name: 'Danya',
//     age: 23,
//     isProgrammer: true,
//     languages: ['ru', 'en', 'de'],
//     'complex key': 'Complex Value',
//     ['key_' + (1 + 3)]: 'Computed key',   //способ задать значения, например Date.now() или др. вычисляемые зн.
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


// ---------------------------------------------------------------------------------------- ***Новый синтаксис для работы с объектами деструктуризация***

// const name = person.name;                                 //без деструктуризации
// const age = person.age;
// const languages = person.languages;

// const {name, age: personAge = 18, languages} = person;    //с деструктуризацией (если надо поменять тип - исп ":", если надо значение по умолчанию - "=")

// console.log(name, personAge, languages);


// ---------------------------------------------------------------------------------------- ***итерация внутри объектов***

                        //объекты не итерируемые, поэтому, в отличии от массива, нельзя использовать циклы
                        //тут цикл for (... of ...) преобразуется в for (... in ...)
                        //НО! ЦИКЛ FOR IN ОПАСЕН! он может заходить в прототип и цепльть что-то с низких уровней
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {       //условие безопасности for in (только собственные параметры)
//     console.log('key: ', key);
//     console.log('value: ', person[key]);
// }
// }

// ---------------------------------------------------------------------------------------- ***современный способ итерации по объекту***

// const keys = Object.keys(person);           //метод .keys получает ключи объекта
// keys.forEach((key) => {
//     console.log('key: ', key);
//     console.log('value ', person[key]);
// })

// ------------------------------------------------------------------------------- ***контекст***  //вместо обращения по имени объекта person лучше использовать "this"
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

// const logger = {                            
//     keys() {                                
//         console.log('object keys: ', Object.keys(this));
//     }
// }

// const bound = logger.keys.bind(person);      //keys.bind() привязывает объект к адресу this, который мы выберем
// bound();
 

// усложняем:
// const logger = {                            //допустим нужно сделать свой консоль логгер с доп функциями
//     keys() {                                //чтобы он выводил инфу в формате "key": value
//         console.log('object keys: ', Object.keys(this));
//     },
//     keysAndValues() {
//         Object.keys(this).forEach((key) => {         //тут обращение к ключам через метод .keys и ссылку на logger (this)
//             console.log(`"${key}": ${this[key]}`);   //тут динамическое обращение к каждому ключу и его значению
//         })
//     }
// }
// logger.keysAndValues.call(logger);


// усложняемм (добавляем разделительные черты с включением):
// const logger = {
//     keys() {
//         console.log('object keys: ', Object.keys(this));
//     },
//     keysAndValues() {
//         Object.keys(this).forEach((key) => {         
//             console.log(`"${key}": ${this[key]}`);   
//         })
//     },
//     withParams (top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('------- Start -------')
//         }

//         Object.keys(this).forEach((key, index, array) => {      //forEach() на самом деле принимает 3 эл-та  
//             console.log(`"${key}": ${this[key]}`);   
//             if (between && index !== array.length - 1) {        //если between включен и не последний элемент
//                 console.log('--------------------')
//             }
//         })

//         if (bottom) {
//             console.log('------- End -------')
//         }
//     }
// }
// logger.withParams.call(person, true, true, true);   //первый аргумент отвечает за контекст, остальные идут на параметры withParams()
// logger.withParams.apply(person, [true, true, true]); //первый аргумент отвечает за контекст, второй массив идет на параметры withParams()