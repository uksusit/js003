// Метод indexOf()​

// indexOf(value) повертає перший індекс, в якому елемент зі значенням value
//  був знайдений в масиві, або число - 1, якщо такий елемент відсутній.
// Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


const spec1 = ["ryzen", "4700u", "16", "1Tb", "2in1"];
console.log(spec1.indexOf("4700u")); //
console.log(spec1.indexOf("16")); //


// Метод includes()​

// includes(value) перевіряє, чи містить масив елемент зі значенням value
//  і повертає true або false відповідно.
// Застосування цього методу корисне в ситуаціях,
//  коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція(індекс).



const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false


const spec2 = ["ryzen", "4700u", "16", "1Tb", "2in1"];
console.log(spec2.includes("32")); // false
console.log(spec2.includes("16")); // true




// якщо у нас буде більше червоних фруктів, наприклад, ще вишня (cherry) або журавлина (cranberries)? Чи будемо ми розширювати умову за допомогою додаткових ||?

const fruit = "apple";

if (
  fruit === "apple" ||
  fruit === "strawberry" ||
  fruit === "cherry" ||
  fruit === "cranberries"
) {
  console.log("It is a red fruit!");
}

// Можемо переписати умову, використовуючи includes(), це дуже просто і масштабовано.

// Виносимо варіанти в масив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit2 = "cherry";
// Перевіряємо присутність елемента
const hasFruit = redFruits.includes(fruit2);

if (hasFruit) {
  console.log(`${fruit2} is a red fruit!`);
}


