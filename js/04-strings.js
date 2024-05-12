const message = 'тут нцть символів)))(_._))----';
console.log(message);
console.log('---',message.length);



const quantity = 15;
const orderMsg = `вибрано ${quantity} ківі`;
console.log(orderMsg);


let brand = 'KyoCeRa';
console.log(brand);
console.log(brand[3]);
console.log(brand.slice(1).toLowerCase());
console.log(brand);
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);


const blWord1 = 'спам';
const blWord2 = 'распродажа';

const string1 = 'привет. я поц абдул , ето не спам, купи слона!';
const string2 = 'сам боль распродажа на неделе, не пропусти';


console.log(string1.includes(blWord1));
console.log(string1.includes(blWord2));

console.log(string2.includes(blWord1));
console.log(string2.toLowerCase().includes(blWord2));
// або:
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blWord2));





// 34 check



// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
//   return normalizedInput;
// }

// Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// Оголошена функція normalizeInput(input)
// Виклик функції normalizeInput("Hello world") повертає "hello world"
// Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
// Виклик функції normalizeInput("Big SALE") повертає "big sale"