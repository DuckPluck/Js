// ---------------------------------------------------------------------------------------- ***number***

// const num = 42;
// const float = 42.42;
// const pow = 10e3;

// console.log(pow);

// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
// console.log('Math.pow(2, 53) - 1', Math.pow(2, 53) - 1);
// console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);

// console.log('Number.MAX_VALUE', Number.MAX_VALUE);
// console.log('Number.MIN_VALUE', Number.MIN_VALUE);

// console.log('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
// console.log('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);

// console.log('2/0', 2/0);

// console.log('Number.Nan', Number.Nan); //Not a Number
// console.log('typeof(NaN)', typeof(NaN));
// console.log('2/undefined', 2/undefined);
// const weird = 2/undefined;
// console.log('const weird = 2/undefined; Number.isNaN(weird)', Number.isNaN(weird));
// console.log('Number.isNaN(42)', Number.isNaN(42));

// console.log('Number.isFinite(Infinity)', Number.isFinite(Infinity));
// console.log('Number.isFinite(42)', Number.isFinite(42));

// const stringInt = '40';
// const stringFloat = '40.42';
// console.log(Number.parseInt(stringFloat) + 2); //перевод String в Int
// console.log(Number.parseFloat(stringFloat) + 2); //перевод String в Float
// // console.log(+stringFloat + 2); //перевод String в Number (кротчайший вариант)

// console.log(0.4 + 0.2); // 0.6000000000000001
// console.log(+(0.4 + 0.2).toFixed(3)); //отсекли лишние нули и исп. Number.parseFloat

// ---------------------------------------------------------------------------------------- ***BigInt***

// console.log(typeof 90071992547409919999999n);
// console.log(90071992547409919999999n - 123123123123123123123123123n);
// console.log(90071992547409919999999n - 123); // error
// console.log(90071992547409919999999n - 123.123n); // error

// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));


// ---------------------------------------------------------------------------------------- ***3 Math***

// console.log('Math.E', Math.E);
// console.log('Math.PI', Math.PI);

// console.log('Math.sqrt', parseInt(Math.sqrt(24)));
// console.log('Math.sqrt', Math.sqrt(24));
// console.log('Math.pow(5, 2', Math.pow(5, 2));
// console.log('Math.abs(-42)', Math.abs(-42));

// console.log('Math.max(45, 21, 78, 134)', Math.max(45, 21, 78, 134));
// console.log('Math.min(45, 21, 78, 134)', Math.min(45, 21, 78, 134));

// console.log('Math.floor(4.9)', Math.floor(4.9));
// console.log('Math.ceil(4.9)', Math.ceil(4.9));
// console.log('Math.round(4.4)', Math.round(4.4)); //округлить к ближайшему целому
// console.log('Math.trunc(4.9)', Math.trunc(4.9)); //удаляет все после ,

// console.log('Math.random()', Math.random());

// console.log('Math.sin(60)', Math.sin(1));



// ---------------------------------------------------------------------------------------- ***4 Math example***


// function getRandomBetween (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomBetween(0, 5))
