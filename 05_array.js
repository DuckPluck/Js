const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес'];
const fib = [1, 1, 2, 3, 5, 8, 13];
console.log(cars)



// // добавление эл-та
// cars.push('Рено');  // в конец
// console.log(cars);

// cars.unshift('Волга'); // в начало
// console.log(cars);

// // удаление эл-та
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

// задача 1
// const text = 'Привет, мы изучаем JavaScript';
// const reverseText = text.split('').reverse().join('');//.split делит строчку когда видит 'Аргумент'
// console.log(reverseText);                       //в данном случае .split делит каждый эл-т строки
// //.join переводит массив в строчку, между элементами будет символ аргумента

// найти индекс элемента по имени
// const index = cars.indexOf('БМВ');              // если не найдет, поставит -1
// console.log("cars.indexOf('БМВ')", index);
// cars[index] = 'Porsche';
// console.log(cars);

// так же есть поиск индекса по имени для оъектов
const people = [
    {name: 'Danya', budget: 4200},
    {name: 'Jenya', budget: 3500},
    {name: 'Karina', budget: 1700},
];

const index = people.findIndex(function(person) {   //анонимная callback функция это куда кладется вывод
    console.log(person);                            //выведет всех персон строчками
})

const index2 = people.findIndex(function(person) {
    return person.budget === 3500;                  //вернет индекс персоны с бюджетом 3500
})   
console.log('budget = 3500 index:', index2);

console.log(people[index2]);                        //выведет персону с бюджетом 3500


const person = people.find(function(person) {
    return person.budget === 3500;                  //тaкже выведет персону с бюджетом 3500
})  
console.log(person); 
