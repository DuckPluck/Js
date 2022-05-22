// const name = 'Danya';
// const birthYear = 1999;

// function getAge(a) {
//     const currentYear = 2022;
//     return currentYear - a;
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет';
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge(birthYear)} года, я родился в ${birthYear > 2000 ? 'A' : 'B'} году`;
// console.log(output);

// const output = `
// <div>This is div </div>
// <p>this is p</p>
// `

// console.log(output);

// const name = 'Даниил';
// console.log("name.length", name.length);
// console.log("name.toLowerCase()", name.toLowerCase());
// console.log("name.toUpperCase()", name.toUpperCase());
// console.log("name.charAt(4)", name.charAt(4));
// console.log("name.indexOf('нии'), name.indexOf('yyи')", name.indexOf('нии'), name.indexOf('yyи'));
// console.log("name.startsWith('ании')", name.startsWith('ании'));
// console.log("name.startsWith('дан')", name.startsWith('дан'));
// console.log("name.startsWith('Дан')", name.startsWith('Дан'));
// console.log("name.toLowerCase().startsWith('дан')", name.toLowerCase().startsWith('дан')); // 2 класса подряд
// console.log("name.endsWith('ил')", name.endsWith('ил'));
// console.log("name.endsWith('ил!')", name.endsWith('ил!'));
// console.log('name.repeat(3)', name.repeat(3));
// const string = '     password';

// console.log(string);
// console.log(string.trimStart());


//***Строчку, передаваемую в функцию Js разделил как массив "s"***

// function logPerson(s, name, age) {
//     if (age < 0) {
//         age = 'Еще не родился';
//     }
//     // console.log(s, name, age);
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }

// const personName = 'Даниил';
// const personAge = 23;

// const personName2 = 'Максим';
// const personAge2 = -10;

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
// const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;

// console.log(output);
// console.log(output2);