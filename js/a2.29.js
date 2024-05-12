// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
//  Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).
// Використовуй цикл "for".

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

function getEvenNumbers(start, end) {
    // Change code below this line
    let array = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    return array;

    // Change code above this line
}
console.log(getEvenNumbers(3, 11));



// ---------------- 30  ----------

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
 break;
  }
}