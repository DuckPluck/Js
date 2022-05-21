const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес'];
const fib = [1, 1, 2, 3, 5, 8, 13];
// console.log(cars)



// // ***ДОБАВЛЕНИЕ ЭЛ-ТА***
// cars.push('Рено');  // в конец
// console.log(cars);

// cars.unshift('Волга'); // в начало
// console.log(cars);

// // ***УДАЛЕНИЕ ЭЛ-ТА***
// cars.shift();           // в начале
// console.log(cars);
// const firstItem = cars.shift();     // также shift выделит первый элемент
// console.log(firstItem);

// cars.pop();             // в конце
// console.log(cars);
// const lastItem = cars.pop();     // также pop выделит последний элемент
// console.log(lastItem);

// console.log(cars.reverse());        //навсегда переворачивает массив
// console.log(cars);

// ***ЗАДАЧА 1 ОТЗЕРКАЛИТЬ ПРЕДЛОЖЕНИЕ***
// const text = 'Привет, мы изучаем JavaScript';
// const reverseText = text.split('').reverse().join('');    //.split делит строчку когда видит 'Аргумент'
// console.log(reverseText);                               //в данном случае .split делит каждый эл-т строки
//                              //.join переводит массив в строчку, между элементами будет символ аргумента

// ***ЗАДАЧА 2 НАЙТИ ИНДЕКС ЭЛ-ТА ПО ИМЕНИ***
// const index = cars.indexOf('БМВ');              // если не найдет, поставит -1
// console.log("cars.indexOf('БМВ')", index);
// cars[index] = 'Porsche';
// console.log(cars);

// так же есть ***ПОИСК ИНДЕКСА ПО ИМЕНИ ДЛЯ ОБЪЕКТОВ***
// const people = [
//     {name: 'Danya', budget: 4200},
//     {name: 'Jenya', budget: 3500},
//     {name: 'Karina', budget: 1700},
// ];

// // const index = people.findIndex(function(person) {   //анонимная callback функция - туда кладется вывод
// //     console.log(person);                            //1 выведет всех персон строчками
// // })

// // const index2 = people.findIndex(function(person) {
// //     return person.budget === 3500;                  //2 вернет индекс персоны с бюджетом 3500
// // })   
// // console.log('budget = 3500 index:', index2);

// // console.log(people[index2]);                        //выведет персону с бюджетом 3500


// // const person = people.find(function(person) {
// //     return person.budget === 3500;                  //3 тaкже выведет персону с бюджетом 3500
// // })  
// // console.log(person); 

// // let findedPerson;
// // for (const person of people) {                          //4 плохой метод поиска по obj без анонимности
// //     if (person.budget === 3500) {
// //         findedPerson = person;
// //     }
// // }

// // console.log('findedPerson: ', findedPerson);

// const person = people.find(person => {person.budget === 3500;})  //5 наилучший метод поиска по obj (когда func в одну стр можно упразднить "return")
// console.log(person);                                //подход называется ЛЯМБДА ФУНКЦИЯ (без лишних переменных)
                                                     //если функция не найдет, то результатом будет undefined

//***ПРОВЕРИТЬ НАЛИЧИЕ ЭЛ-ТА В МАССИВЕ***
// console.log(cars.includes('Мазда'));



// ***МЕТОДЫ ПРЕОБРАЗОВАНИЯ МАССИВА***

// const upperCaseCars = cars.map(car => {             //.map метод, сохраняющий старый массив и меняющий новый
//     return car.toUpperCase()
// })  
// console.log('Новый массив', upperCaseCars);
// console.log('Старый массив', cars);



// const pow2Fib = fib.map(num => num ** 2);           
// console.log('Новый массив', fib);
// console.log('Старый массив', pow2Fib);

// const pow2 = num => num ** 2;                  //Максимально декларативный подход (не вызываем, а передаем f)
// // const sqrt = num => Math.sqrt(num)           //для второго метода .map (если он не стандартный (исп. ".map(sqrt)"))

// const pow2Fib = fib.map(pow2).map(Math.sqrt);     
// console.log('Новый массив', fib);
// console.log('Старый массив', pow2Fib);


 //***ФИЛЬТРАЦИЯ МАССИВА FILTER***/

// const pow2 = num => num ** 2;                                
// const pow2Fib = fib.map(pow2);

// const filteredNumbers = pow2Fib.filter(num => {num > 20});  //.filter работает как .map, если усл true, то выводит в новый массив
// console.log('Новый массив', fib);
// console.log('Старый массив', pow2Fib);


//***ОБЪЕДИНЕНИЕ МАССИВА REDUCE***
//Суммируем все что выше 2000

const people = [
    {name: 'Danya', budget: 4200},
    {name: 'Jenya', budget: 3500},
    {name: 'Karina', budget: 1700},
];

// people.reduce(function(acc, person) {
// // 1 парам. - фнкция, 2 парам - откуда считать. B функции есть буфер(аккумулятор) и эл-т по которому мы делаем итерацию
// }, 0) 

// const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
//     acc += person.budget;                             //пользоваться условием if вместо .filter НЕПРАВИЛЬНО!
//     return acc;
// }, 0)

// console.log(allBudget);


//разобьем методы на строчки. Такой подход называется chaining
// const allBudget = people
// .filter(person => person.budget > 2000)
// .reduce((acc, person) => {
//     acc += person.budget;                             
//     return acc;
// }, 0)

// console.log(allBudget);