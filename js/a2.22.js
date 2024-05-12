// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push


// function createArrayOfNumbers(min, max) {
const min = 1;
const max = 5;
  const numbers = [];
  // Change code below this line
 for (let i = min; i <= max; i += 1) {
   numbers.push(i);
   console.log(i, "  ----  ", numbers);
}
  // Change code above this line
  // return numbers;
// }



