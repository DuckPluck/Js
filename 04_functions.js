// ---------------------------------------------------------------------------------------- ***Функция***
// function addItemToEnd() {
//     let example;
// }
// const example = 1;
// Метод
// example.addItemToEnd();

// ---------------------------------------------------------------------------------------- ***Function Declaration***
// function greet(name) {
//     console.log('Привет - ', name);
// }
// greet('Лена');


// ---------------------------------------------------------------------------------------- ***Function Expression*** 
// не может быть объяввлен до блока функции + преимущества синтаксиса

// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name);
// }
// greet2('Лена2');

// console.log(typeof greet);
// console.dir(greet);

// ---------------------------------------------------------------------------------------- ***АНОНИМНЫЕ ФУНКЦИИ***
// функции внутри функции, которые не имеют названия

// let counter = 0;
// setInterval(function() {
//     console.log(++counter);
//     }, 1000
// );

// let counter = 0;
// const interval = setInterval (function() {   //также есть setTimeout и clearTimeout, работают как 1 interval
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//     console.log(++counter);
// }
// }, 1000
// );

// ---------------------------------------------------------------------------------------- ***3 СТРЕЛОЧНЫЕ ФУНКЦИИ***

// function greet(name) {
//     console.log('Привет - ', name);
// }

// const arrow = (name) => {                        //записи абсолютно идентичны
//     console.log('Привет - ', name);
// }

// const arrow2 = name => console.log('Привет - ', name);

// arrow('Danya1');
// arrow2('Danya2');
// greet('Danya');

// const pow2 = num => num ** 2;
// console.log(pow2);
// console.log(pow2(5));

// ---------------------------------------------------------------------------------------- ***4 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ***

// const sum = (a = 1, b = 1) => a + b;                    //можно не задавать параметр
// console.log(sum(40));
// console.log(sum());

// const sum2 = (a, b = a*2) => a + b;
// console.log(sum2(40));

// function sumAll(...all) { //... - оператор rest - собирает все числа в массив "all"
//     let result = 0;
//     for (let num of all) {
//         result += num;
//     }
//     return result;
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7);
// console.log(res);


// ---------------------------------------------------------------------------------------- ***5 замыкания***    //часто используется для создания приватных переменных

// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName);
//     }
// }

// var logWithLastName = createMember('Danya');  //    замкнули имя а фамилия варьируется
// console.log(logWithLastName('Utkin'));        //    к параметру name не получить доступ
// console.log(logWithLastName('Kuznezov'));
// logWithLastName = createMember('Fedor');
// console.log(logWithLastName('Coolman'));
// console.log(logWithLastName('Jackson'));