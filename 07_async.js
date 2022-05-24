//                          ***Event loop***

//              //Самый типичный пример асинхронности - таймауты и интервалы, отслеживание скролла
//              //таймаут между командами. Аргументы - callback ф-ия и время в мсек (1000мсек = 1сек)
// const timeout = setTimeout(() => {       
//     console.log('After timeout');
// }, 2500);
// clearTimeout(timeout);           //отмена таймаута


//             //интервал повторения между командами. Аргументы - callback ф-ия и время в мсек
// const interval = setInterval(() => { 
//         console.log('interval');
// }, 1000);
// clearInterval(interval);         //отмена интервала




// const delay = (callback, wait = 1000) => {      //нельзя сразу передать аргументы в setTimeout(), тк при вызове
//     setTimeout(callback, wait)                  //они отправятся на внешнюю функцию, поэтому нужно указывать callback, wait в обоих функциях

// delay(() => {                                   //теперь обращаясь к delay() мы вызываем таймаут
//     console.log('After 2 seconds')
// }, 2000)}




//                                 ***PROMISE***
//механизм, который позволяет удобно работать с асинхронностью
//убрать лишние уровни вложенности при большом кол-ве callback функций
//перепишем прошлую функцию без callback:


// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {   //этот callback 'executor' принимает параметры resolve (для норм работы) и reject (для ошибок)
//         setTimeout(() => {
//             if (promise !== 0) {resolve();               //условие ошибки
//              } else {reject('Что-то пошло не так. Повторите попытку')}                                   //когда все завершится вызовется метод resolve() или reject()
//         }, wait)
//     })
//     return promise;
// }


// delay(2500)                                             //функция вернет promise, который имеет 3 стандартных метода
//     .then(() => {console.log('After 2 seconds')})       //в .then мы попадаем, когда время истечет
//     .catch(err => console.error('Error', err))          //в .catch мы попадаем если произошла ошибка
//     .finally(() => console.log('Finnaly'))              //в .finally мы попадаем когда функция кончится



//                              ***PROMISE БЕЗ CALLBACK'ов***
// const getData = () => new Promise(resolve => resolve([
//     1, 1, 2, 3, 5, 8, 13
// ]));

// async function asyncExample() {         //необходимо добавить "async", для того, чтобы воспользоваться "await"
//     try {                               //try{} catch(){} finally{} используется как альтернатива .then .catch .finally
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