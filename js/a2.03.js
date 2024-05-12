// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"

// function checkStorage(available, ordered) {
//     // Change code below this line
//     let message;

//     if (ordered === 0) {
//         message = "Your order is empty!";
//     } else if (ordered > available) {
//         message = "Your order is too large, not enough goods in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }

//     return message;
    
//     // Change code above this line
// }


function checkStorage(available, ordered) {
  // Change code below this line
  // let message;

  if (ordered === 0) {
    return  "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
  // Change code above this line
}


//  a2.05
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

const fruits = ["apple", "plum", "pear", "orange"];
// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];


// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);
// // Write your code under this line


// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина.масиву - 1
// lastElement	Значення останнього елемента масиву
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];
// const  fruitsArrayLength = (fruits.length);
// console.log(fruitsArrayLength);
// // Change code below this line a7


const array3 = ['Earth', 'Mars', 'Venus'];
  const first = array3[0];
  const last = array3[array3.length - 1];
console.log(first, last);

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

function getExtremeElements(array) {
  // Change code below this line
  const first = array[0];
  const last = array[array.length - 1];
return [first, last];
  // Change code above this line
}


// Доповни код функції splitMessage(message, delimiter). Вона повинна розбити рядок message за вказаним роздільником delimiter і зберегти отриманий масив рядків у змінній words.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
// const 
  words = message.split(delimiter);
  // Change code above this line
  return words;
}