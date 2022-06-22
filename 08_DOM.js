// ---------------------------------------------------------------------------------------- DOM
// работа с браузерным api, взаимодействие js с HTML, динамические изминения страницы
// каждый тег в html является узлом(node) 

// console.log() - выводит строчку
// console.dir() - выводит список атрибутов (через "." мужно получить доступ к конкретному атрибуту)


// получаем доступ к атрибутам заголовка
// const heading = document.getElementById('hello');
// console.dir(heading.attributes);
// console.dir(heading.id);


//меняем заголовок <h1>:
// const heading = document.getElementById('hello');
// console.dir(heading.textContent);                             // чтобы узнать название св-ва, нужно поискать его в списке console.dir(название эл-та)
// setTimeout(() => {
//     heading.textContent = 'Changed from JavaScript';
//     heading.style.color = 'red';                                  // все в строчном формате ' '. 
//     heading.style.textAlign = 'center';                           // "text-align" в js превратится в "textAlign"
//     heading.style.backgroundColor = 'rgb(255, 255, 220)';
//     heading.style.padding = '2rem';
// }, 2000)


//автоматизируем изменения стилей
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
//     addStylesTo(heading2_2.children[0], 'Changed from js 3', 'blue')    //если в тексте нужна ссылка - придется ссылаться на нее
// }, 3000);



// const heading2 = document.querySelector('h2');                 //все доступы по 1 попавшемуся эл-ту
// const heading2 = document.querySelector('.h2-class');       //доступ по классу
// const heading2 = document.querySelector('#sub-hello');      //доступ по id
// const heading2_2 = heading2.nextElementSibling;             //доступ по атрибуту след. эл-та (ищите в dir())

// const h2List = document.querySelectorAll('h2');                //доступ ко всем h2 
// const heading2_2 = h2List[h2List.length - 1];                  //доступ к определенному h2 по списку всех h2


// также можно воспользоваться .getElementsByTagName и .getElementsByClassName, но они устарели (медленные)



// ---------------------------------------------------------------------------------------- ***СОБЫТИЯ***
// developer.mozila.org/ru/docs/Web/Events - список всех событий
// вводятся одним словом без пробелов .on'eventName' 

// 1 способ
// heading.onclick = () => {                           
//     if (heading.style.backgroundColor === 'rgb(255, 255, 220)') {
//         heading.style.backgroundColor = 'red';
//         heading.style.color = 'rgb(255, 255, 220)';
//     } else if (heading.style.backgroundColor === 'red') {
//         heading.style.backgroundColor = 'blue';
//         heading.style.color = 'red';
//     } else if (heading.style.backgroundColor === 'blue') {
//         heading.style.backgroundColor = 'green';
//     } else if (heading.style.backgroundColor === 'green') {
//         heading.style.backgroundColor = 'rgb(255, 255, 220)';
//     }
// }

// 2 способ (через .addEventListener())
// heading2.addEventListener('dblclick', () => {                           //1 аргумент это название Event'а, 2 это алгоритм изменений
//     if (heading2.style.backgroundColor === 'rgb(255, 255, 220)') {
//         heading2.style.backgroundColor = 'red';
//         heading2.style.color = 'rgb(255, 255, 220)';
//     } else if (heading2.style.backgroundColor === 'red') {
//         heading2.style.backgroundColor = 'blue';
//         heading2.style.color = 'red';
//     } else if (heading2.style.backgroundColor === 'blue') {
//         heading2.style.backgroundColor = 'green';
//     } else if (heading2.style.backgroundColor === 'green') {
//         heading2.style.backgroundColor = 'rgb(255, 255, 220)';
//     }
// })


// ---------------------------------------------------------------------------------------- ***ТРЕКИНГ СОБЫТИЯ***

//                                     таким образом можно отслеживать действия пользователей на сайте или проводить дебаг

// const link = heading2_2.children[0];
// link.onclick = () => {                       //для имитации действия можно включить в блок event.preventDefault()
//     console.log('Click on link', event, event.target, event.target.getAttribute('href'));
// }