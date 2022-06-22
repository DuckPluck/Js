// Документацию можно найти на https://developer.mozilla.org/ru/docs/Web/JavaScript

// ---------------------------------------------------------------------------------------- ***1 переменные***

// var name = 'Danya';
// const isProgrammer = true;
// //const age = 26;
// const _private = 'private';

// ---------------------------------------------------------------------------------------- ***2 Мутирование***

//console.log('Имя человека: ' + name + ', а возраст человека: ' + age);
//console.log(age);
//alert('Имя человека: ' + name + ', а возраст человека: ' + age);

//const lastName = prompt('Введите фамилию');
//alert(name + ' ' + lastName);

// ---------------------------------------------------------------------------------------- ***3 Операторы***

// const currentYear = 2022;
// const birthYear = 1999;

// const age = currentYear - birthYear;

// console.log(age);

// const a = 10;
// const b = 5;

// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);
// console.log(a + b);

// ---------------------------------------------------------------------------------------- ***4 типы данных***

// const isProgrammer = true;
// const name = 'Danya';
// const age = 23;
// let x;

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

// ---------------------------------------------------------------------------------------- ***5 приоритет операторов***

// const fullAge = 26;
// const birthYear = 1999;
// const currentYear = 2022;

// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge)

// ---------------------------------------------------------------------------------------- ***6 Условные операторы***

// const courseStatus = 'pending'; // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить');
// } else if (courseStatus === 'pending') {
//   console.log('Курс еще не готов');
// } else {
//   console.log('Курс не получился');
// }

// const num1 = 42; //number
// const num2 = '42'; //string

// console.log(num1 === num2)

// const isReady = false;

// // if (isReady === true) {
// //   console.log('Все готово');
// // } else {
// //   console.log('Ничего не готово');
// // }

// isReady ? console.log('1') : console.log('0'); // Тернарное выражение

// ---------------------------------------------------------------------------------------- ***7 Булева логика***

// ---------------------------------------------------------------------------------------- ***8 функции***

// function calculateAge(year) {
//   return 2022 - year;
// }

// // console.log(calculateAge(1999));
// // console.log(calculateAge(1980));
// // console.log(calculateAge(1987));
// // console.log(calculateAge(1943));
// // console.log(calculateAge(1960));

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   if (age > 0) {
//     console.log("Человек по имени " + name + " сейчас имеет возраст " + age);
//   } else {
//     console.log("Год рождения не может быть в будущем!");
//   }
// }

// logInfoAbout("Danya", 1999);
// logInfoAbout("чек", 1959);
// logInfoAbout("Flex", 2222);


// ---------------------------------------------------------------------------------------- ***9 массивы*** (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties)


// let cars = ['Мазда', 'Мерседес', 'Ford'];
// console.log(cars, cars[2]);
// console.log(cars.length);
// cars[2] = 'Porche'
// console.log(cars, cars[2]);
// cars[cars.lenght] = 'Дупа';
// console.log(cars, cars[3])


// ---------------------------------------------------------------------------------------- ***10 циклы***

// const cars = ['Мазда', 'Мерседес', 'Ford'];
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i];
// //     console.log(car);
// // }

// // более удобная прокрутка массива

// for (let car of cars) {
//     console.log(car);
// }


// ---------------------------------------------------------------------------------------- ***11 объекты***

// const person = {
//     firstName: 'Danya',
//     lastName: 'Utkin',
//     year: 1999,
//     languages: ['Ru', 'En', 'De'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person['lastName']);
// person.greet();

// const key = 'languages';
// console.log(person[key]);
// console.log(person.languages);

// person.hasWife = true;
// console.log(person.hasWife);

// person.isProgrammer = true;
