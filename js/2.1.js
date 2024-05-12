const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
  // Якщо не збігається, то на цій ітерації нічого не робимо
}

console.log(message); // Клієнт з таким ім'ям є в базі даних!


// ---------------------------------------------------------------------------------


// Використовуємо цикл для виведення тільки чисел, більших за певне значення.

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}



