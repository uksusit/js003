// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
    // const match
  console.log(array, args);

  for (const arg of args) {
    console.log("current arg: ", arg);

  // if arg  includes(matches)
    if (array.includes(arg)) { matches.push(arg) };
      console.log("current matches: ", matches);

}
      console.log(matches);

  // Change code above this line
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);


// Напиши функцію під назвою findMatches, яка приймає масив як перший аргумент і довільну кількість додаткових аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Функція має повернути новий масив, який містить лише ті числа з додаткових аргументів, які присутні в масиві, указаному як перший аргумент. Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) має повернути масив [1, 2], оскільки лише ці числа містяться в першому масиві аргументів.

// Поради:

// Використовуй параметр rest (...args), щоб зібрати всі додаткові аргументи в масив.
// Пройдись по кожному аргументу в args за допомогою циклу.
// Використовуй метод includes() для масиву, щоб перевірити, чи існує кожен аргумент у масиві.
// Якщо аргумент знайдено у масиві, додай його до масиву matches.
// Поверни масив matches.
// Оголошена функція findMatches()
// Виклик findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повертає [1, 2]
// Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає [17, 89, 2]
// Виклик findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) повертає [24, 9, 41]
// Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає []