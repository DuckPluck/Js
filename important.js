//most important info









//                  ***ПРЕОБРАЗОВАНИЯ СТРОК***
// console.log(name.length);                  //длинна строки
// console.log(name.toLowerCase());           //регистр
// console.log(name.toUpperCase());
// console.log(name.charAt(4));               //четвертая буква
// console.log(name.indexOf('нии'));          //индекс первой буквы слога "нии"
// console.log(name.startsWith('Дан'));       //начинается с Дан? - true/false. Регистр важен, но можно перед поиском .toLowerCase
// console.log(name.endsWith('ил!'));         //кончается на ил? - true/false.
// console.log(name.repeat(3));               //повторить строку 3 раза
// console.log(string.trimStart());           //убрать пробелы в начале





//                ***ДИНАМИЧЕСКИЕ ВЫРАЖЕНИЯ В СТРОКАХ***
// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет';
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge(birthYear)} года, я родился в ${birthYear > 2000 ? 'A' : 'B'} году`;





//                  ***МАССИВ СТРОЧКИ В ФУНКЦИИ**
//         Строчку, передаваемую в функцию Js разделил как массив "s"
// отправляем строчку в массив
// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;

// function logPerson(s, name, age) {      //тут массив строчки первый
//     if (age < 0) {
//         age = 'Еще не родился';
//     }
//     // console.log(s, name, age);
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`;     // способ обращения к строчке через мвссив 
// }                                                    // s[0] - первый эл-т строки






//                  ***FUNCTION DECLARATION***
// function greet(name) {
//     console.log('Привет - ', name);
// }
// // greet('Лена');


//                  ***FUNCTION EXPRESSION*** 
//                   не может быть объявлен до блока функции + преимущества синтаксиса (более удобная запись)
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name);
// }
// greet2('Лена2');






//                  ***АНОНИМНЫЕ ФУНКЦИИ***
//                  функции внутри функции, которые не имеют названия
//                  используются для экономии памяти (аналогия с var и let)
// let counter = 0;
// setInterval(function() {
//     console.log(++counter);
//     }, 1000
// );




//                   ***3 СТРЕЛОЧНЫЕ ФУНКЦИИ***
//                   существенно упрощают синтаксис
// function greet(name) {                   //зачем писать так,
//     console.log('Привет - ', name);
// }

                                            //когда можно вот так?
// const greet2 = name => console.log('Привет - ', name); 






//                  ***4 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ***
//          можно частично или полностью не передавать в f параметр
// const sum = (a = 1, b = 1) => a + b;  





//                  ***СУММИРОВАТЬ ВСЕ ПАРАМЕТРЫ**
//             "..." - оператор rest - собирает все числа в массив с названием "all" (можно переименовать)
// function sumAll = ...all => { 
//     let result = 0;
//     for (let num of all) {
//         result += num;
//     }
//     return result;
// }
// const res = sumAll(1, 2, 3, 4, 5, 6, 7);





//                         ***ЗАМЫКАНИЯ ФУНКЦИЙ***
//                   часто используется для создания приватных переменных
// function createMember(name) {            //к параметру name не получить доступ
//     return function(lastName) {
//         console.log(name + lastName);    //замкнули имя а фамилия варьируется
//     }
// }
// var logWithLastName = createMember('Danya');
// console.log(logWithLastName('Utkin'));
// console.log(logWithLastName('Kuznezov'));
// logWithLastName2 = createMember('Fedor');
// console.log(logWithLastName('Coolman'));
// console.log(logWithLastName('Jackson'));






//                      ***ДОБАВЛЕНИЕ ЭЛ-ТА***
// cars.push('Рено');                   // в конец
// cars.unshift('Волга');               // в начало

//                       ***УДАЛЕНИЕ ЭЛ-ТА***
// cars.shift();                        // в начале
// const firstItem = cars.shift();      // также shift выделит первый элемент

// cars.pop();                          // в конце
// const lastItem = cars.pop();         // также pop выделит последний элемент





//                  ***ОТЗЕРКАЛИТЬ ПРЕДЛОЖЕНИЕ***
//                      .split делит строчку когда видит 'Аргумент'
//                       в данном случае .split делит каждый эл-т строки
//                          .reverse навсегда переворачивает массив
//                          .join переводит массив в строчку, между элементами будет символ аргумента
// const text = 'Привет, мы изучаем JavaScript';            
// const reverseText = text.split('').reverse().join('');   
// console.log(reverseText);                               
//                              





//              ***НАЙТИ ИНДЕКС ПО ИМЕНИ и заменить эл-т***
//                  если не найдет, поставит индекс -1
// const index = cars.indexOf('БМВ');              
// console.log("cars.indexOf('БМВ')", index);
// cars[index] = 'Porsche';
// console.log(cars);





//        ***.findIndex() Поиск индекса obj с бюджетом 3500***
//           "ЛЯМБДА ФУНКЦИЯ"*** (без лишних переменных)
//               (когда func в одну стр можно упразднить "return")
//                   person - callback функция - туда кладется вывод
// const index2 = people.findIndex(person => {person.budget === 3500;})    
// console.log('budget = 3500 index:', index2);





//          ***.find() поиск эл-та obj по с бюджетом 3500***   
//                  если функция не найдет, то результатом будет undefined
// const person = people.find(person => {person.budget === 3500;})  
// console.log(person);                                





//                  ***ПРОВЕРИТЬ НАЛИЧИЕ ЭЛ-ТА В МАССИВЕ***
// console.log(cars.includes('Мазда'));




//                  ***МЕТОДЫ ПРЕОБРАЗОВАНИЯ МАССИВА***
//.map метод, сохраняющий старый массив и меняющий новый
// const upperCaseCars = cars.map(car => {             
//     return car.toUpperCase()
// })  
// console.log('Новый массив', upperCaseCars);
// console.log('Старый массив', cars);




//                  ***ФИЛЬТРАЦИЯ МАССИВА .FILTER***/
//.filter работает как .map, если усл true, то выводит в новый массив
// const filteredNumbers = pow2Fib.filter(num => {num > 20});  
// console.log('Новый массив', fib);
// console.log('Старый массив', pow2Fib);



//                  ***ОБЪЕДИНЕНИЕ МАССИВА .REDUCE***
//разобьем методы на строчки. Такой подход называется ***chaining***
//                                       Суммируем все что выше 2000
// const allBudget = people
// .filter(person => person.budget > 2000)
// .reduce((acc, person) => {
//     acc += person.budget;                             
//     return acc;
// }, 0)

// console.log(allBudget);




//               ***СОВРЕМЕННЫЙ СИНТАКСИС ДЛЯ РАБОТЫ С ОБЪЕКТАМИ***
//                      ДЕСТРУКТУРИЗАЦИЯ

// const name = person.name;                           //без деструктуризации
// const age = person.age;
// const languages = person.languages;

// const {name, age: personAge = 18, languages} = person; //с деструктуризацией (если надо поменять имя - исп ":", если надо значение по умолчанию - "=")
// console.log(name, personAge, languages);




//                  ***СОВРЕМЕННЫЙ СПОСОБ ИТЕРАЦИИ ПО ОБЪЕКТУ***
// const keys = Object.keys(person);           //метод .keys получает ключи объекта
// keys.forEach((key) => {
//     console.log('key: ', key);
//     console.log('value ', person[key]);
// })




//                      ***КОНТЕКСТ*** нужно использовать когда можно
// const logger = {                                          // "logger"
//     keys() {
//         console.log('object keys: ', Object.keys(this));  // тут "this" это ссылка на "logger" 
//     },                                                    // (на название объекта, внутри которого ссылка "this")
// }
// logger.keys();                                            //функция в объекте выводит все ключи объекта в массив






//                      ***КОНТЕКСТ*** на практике
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
// logger.keysAndValues();                              //вызовет функцию на себя
// logger.keysAndValues.call(person);                   //переадресует и вызовет функцию на любой obj. Даже на call({a: 1, b: 2})





//                      ***КОНТЕКСТ*** на практикеу сложняемм (добавляем разделительные черты с включением):
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



//                      ***ВЫЗОВ МЕТОДА ОБЪЕКТА НА ДРУГИЕ ОБЪЕКТЫ***
// logger.withParams.call(person, true, true, true);   //первый аргумент отвечает за контекст, остальные идут на параметры withParams()
// logger.withParams.apply(person, [true, true, true]); //первый аргумент отвечает за контекст, второй массив идет на параметры withParams()






//                      ***ПРИВЯЗКА ДРУГОГО ОБЪЕКТА К this ***
// const bound = logger.keys.bind(person);      //keys.bind() привязывает другой объект к адресу this
// bound();                                     //вызов функции

// logger.keys.call(person)                     //keys.call() привязывает объект к адресу this и сразу вызывает






//                          ***Event loop***
//                    Самый типичный пример асинхронности - таймауты и интервалы


//                  ***ТАЙМАУТ*** между командами
//                   Аргументы - callback ф-ия и время в мсек (1000мсек = 1сек)
//  const timeout = setTimeout(() => {       
//     console.log('After timeout');
// }, 2500);
// clearTimeout(timeout);           //отмена таймаута




//                   ***ИНТЕРВАЛ*** повторения между командами. Аргументы - callback ф-ия и время в мсек
// const interval = setInterval(() => { 
//         console.log('interval');
// }, 1000);
// clearInterval(interval);         //отмена интервала




//                                 ***PROMISE***
//механизм, который позволяет удобно работать с большим кол-вом асинхронности
//позволяет убрать лишние уровни вложенности при большом кол-ве callback функций
//применим его полную форму на функцию delay()

// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {               //этот callback принимает параметры resolve (для норм работы) и reject (для ошибок)
//         setTimeout(() => {
//             if (promise !== 0) {resolve();                                //условие ошибки
//              } else {reject('Что-то пошло не так. Повторите попытку')}        //когда все завершится вызовется метод resolve() или reject()
//         }, wait)
//     })
//     return promise;
// }

// delay(2500)                                             //функция вернет promise, который имеет 3 стандартных метода
//     .then(() => {console.log('After 2 seconds')})       //в .then мы попадаем, когда время истечет
//     .catch(err => console.error('Error', err))          //в .catch мы попадаем если произошла ошибка
//     .finally(() => console.log('Finnaly'))              //в .finally мы попадаем когда функция кончится





//                            ***promise без callback***

// const getData = () => new Promise(resolve => resolve([               //Вызов функции
//     1, 1, 2, 3, 5, 8, 13
// ]));

// async function asyncExample() {         //необходимо добавить "async", для того, чтобы воспользоваться "await"
//     try {                               //try{} catch(){} finally{} используется для вывода ошибки и вывода сообщения о завершении функции
//         await delay(3000);              //вместо .then, чтобы время задержки учитывалось, можно воспользоваться "await"
//         const data = await getData();   //тут тоже
//         console.log('Data', data);
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
// }
// asyncExample();





//                                          ***DOM***

// получаем доступ к атрибутам заголовка:
// const heading = document.getElementById('hello');
// console.dir(heading.attributes);
// console.dir(heading.id);


// получаем доступ к node'ам html:
// const heading2 = document.querySelector('h2');                 //все доступы по 1 попавшемуся эл-ту
// const heading2 = document.querySelector('.h2-class');       //доступ по классу
// const heading2 = document.querySelector('#sub-hello');      //доступ по id
// const heading2_2 = heading2.nextElementSibling;             //доступ по атрибуту след. эл-та (ищите в dir())

// const h2List = document.querySelectorAll('h2');                //доступ ко всем h2 
// const heading2_2 = h2List[h2List.length - 1];                  //доступ к определенному h2 по списку всех h2




//                          ***ОПТИМАЛЬНЫЙ СПОСОБ ИЗМИНЕНИЯ СТИЛЕЙ***

// const heading = document.getElementById('hello');
// function addStylesTo(node, text, color, fontSize) {
//     node.textContent = text;
//     node.style.color = color;                                  // все в строчном формате ' '. 
//     node.style.textAlign = 'center';                           // "text-align" в js превратится в "textAlign"
//     node.style.backgroundColor = 'rgb(255, 255, 220)';
//     node.style.padding = '2rem';
//     if (fontSize) {                                            // falsy: '', undefined, null, 0, false
//         node.style.fontSize = fontSize;
//     }
//     node.style.display = 'flex';
//     node.style.justifyContent = 'center';
// }

// setTimeout(() => {
//     addStylesTo(heading, 'Changed from js 1', 'red')
// }, 1000);

// setTimeout(() => {
//     addStylesTo(heading2, 'Changed from js 2', 'green')
// }, 2000);

// setTimeout(() => {
//     addStylesTo(heading2_2.children[0], 'Changed from js 3', 'blue')    //если в тексте нужна ссылка - придется ссылаться конкретно на нее
// }, 3000);




//                                      ***СОБЫТИЯ***

// developer.mozila.org/ru/docs/Web/Events - список всех событий
// вводятся одним словом без пробелов .on'eventName' 

// (через .onEvent)
// heading.onclick = () => {                           
//     if (heading.style.backgroundColor === 'rgb(255, 255, 220)') {
//         heading.style.backgroundColor = 'red';
//         heading.style.color = 'rgb(255, 255, 220)';
//     } else if (heading.style.backgroundColor === 'red') {
//         heading.style.backgroundColor = 'rgb(255, 255, 220)';
//         heading.style.color = 'red';
//     }
// }


//                                      ***ТРЕКИНГ СОБЫТИЯ***
//                                     таким образом можно отслеживать действия пользователей на сайте или проводить дебаг

// const link = heading2_2.children[0];
// link.onclick = () => {                       //для имитации действия можно включить в блок event.preventDefault()
//     console.log('Click on link', event, event.target, event.target.getAttribute('href'));
// }



