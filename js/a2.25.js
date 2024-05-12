// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Доповни код функції getCommonElements(array1, array2), яка приймає два масиви 
// (array1 та array2) довільної довжини в якості параметрів.Усередині функції:

// Створи порожній масив з назвою newArray.
// Використай цикл for для ітерації кожного елемента у array1.
// У середині циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, додай елемент до newArray за допомогою методу push.
// Поверни newArray як результат.
// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

function getCommonElements(array1, array2) {
  // Change code below this line
    let newArray = [];
    for (let i = 0; i < array1.length; i += 1){
        if (array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }
    return newArray;

 // Change code above this line
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// -------------  26  --------------
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // for (let i = 0; i < order.length; i += 1) {
    //   total += order[i];
    
    for (const item of order) {
      
    total += item;
  }

  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// ---------------------  27  ----------------------
        
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];
  
  for (let number of numbers) {
    
  // }
  
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([12, 24, 8, 41, 76], 20));


// ------------- 28 -------------------
// Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

// 5 % 1 = 0;
// // 5, поділене на 1, дорівнює 5, а остача - 0

// 5 % 2 = 1;
// //  5, поділене на 2, дорівнює 2, а остача - 1

// 5 % 3 = 2;
// //  5, поділене на 3, дорівнює 1, а остача - 2

// 5 % 4 = 1;
// //  5, поділене на 4, дорівнює 1, а остача - 1

// 5 % 5 = 0;
// //  5, поділене на 5, дорівнює 1, а остача - 0

// Заповни відсутні значення дільника для виразів з модулем. Заміни кожен випадок відповідним значенням дільника, щоб вирази обчислювалися правильно.

// змінна a має бути числом 0

// змінна b має бути числом 1

// змінна c має бути числом 3

// змінна d має бути числом 5

// змінна e має бути числом 2




// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

console.log(a, b, c, d, e);