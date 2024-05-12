// function calculateTotal(number) {
// const number = 64;
// let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//     sum += i;
//     console.log(sum);
// }
// console.log("sum=", sum);


// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

function calculateTotal(number) {
 // Change code below this line
let sum = 0;
for (let i = 1; i <= number; i += 1) {
  sum += i;
}
return sum;
  // Change code above this line
}



// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit


const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length;  i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}