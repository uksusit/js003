
// Якщо цикл знаходиться в тілі функції, то оператор break не припиняє виконання функції, а тільки перерве цикл. Для того щоб переривати виконання відразу циклу і функції, є оператор return.

// У прикладі шукаємо число 3. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
      return i;
    }
  }

  // Цей console.log не виконається
  console.log("Лог після циклу в тілі функції");
}

const result = fn();
console.log("Лог після виходу з функції");
console.log(`Результат виконання функції ${result}`);


// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
        //   break;
          return number;
    }
  }

//   return number;
  // Change code above this line
}

console.log(findNumber(8, 17, 3));

// --------------- 31 ------------------


// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення)
// - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє,
//  і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод
// масив.includes(значення).

// Тобі потрібно реалізувати свою власну логіку для виконання цього завдання.
//  Розглянь вибір методу ітерації, який пройде по всьому масиву(array),
//  і на кожній ітерації перевірятиме, чи дорівнює елемент масиву value.Якщо так,
// поверниtrue, в іншому випадку поверни false.

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

function includes(array, value) {
  // Change code below this line
  for (const iterator of array) {
    if (iterator === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}

console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));

