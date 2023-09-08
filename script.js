//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка
// повинна показати “Іван”).

// let name = 'Ivan';
// let city = 'Kyiv';
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = 'Olga';
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${'name'}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = '5';
// let b = '13cvb';
// let c = '12.9sxdcfgv';
// вивести в консоль тип
// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(10, 20, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = 'Welcome to Bahamas!';
// console.log(message.length);

//***8**
//вивести в консоль message великими літерами

// const message = 'Welcome to Bahamas!';
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = 'olga';
// user.age = 23;
// user.city = 'kiyv';
// console.log(user);
// delete user.city;
// user['like flowers'] = true;
// console.log(user);

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта

// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test'

// Домашнє завдання. 2

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// const num = -3;
// if (num <= 0) {
//   console.log(false);
// } else console.log(true);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test' , "qwerty" , true

// let = 'test';

// if (let == 'test') {
//   console.log(true);
// } else console.log(false);

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// const num = 9;

// if (num > 10) {
//   console.log(num - 5);
// } else if (num < 10) {
//   console.log(num + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let date = prompt('Введіть число від 1 до 12');
// console.log(typeof date);

// if (date == 1) {
//   console.log('Січень');
// } else if (date == 2) {
//   console.log('Лютий');
// } else if (date == 3) {
//   console.log('Березень');
// } else if (date == 4) {
//   console.log('Квітень');
// } else if (date == 5) {
//   console.log('Травень');
// } else if (date == 6) {
//   console.log('Червень');
// } else if (date == 7) {
//   console.log('Липень');
// } else if (date == 8) {
//   console.log('Серпень');
// } else if (date == 9) {
//   console.log('Вересень');
// } else if (date == 10) {
//   console.log('Жовтень');
// } else if (date == 11) {
//   console.log('Листопад');
// } else if (date == 12) {
//   console.log('Грудень');
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// Домашнє завдання. 3

// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];

// let result = fruts.map(item => item.name);

// console.log(result);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let a = 2; a <= 10; a++) {
//   if (a % 2) continue;
//   console.log(a);
// }

// -- 3 --
//Замініть цикл "for" на "while"

// for (let i = 0; i < 5; i++) {
//   console.lpg(`цифра ${i}!`);
// }

// let i = 0;

// while (i < 5) {
//   i++;
//   console.log(i);
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let num;

// do {
//   num = prompt('введіть число більше за 100');
// } while (num <= 100 && num);

// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];

// let result = girls.map(item => item.age);

// let summ = result.reduce((sum, result) => sum + result) / result.length;
// console.log(summ);
