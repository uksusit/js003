// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Поради:

// Використовуй метод split() для розбиття рядка на масив слів за роздільником пробілу (' ').
// Ініціалізуй змінну longestWord першим словом з масиву.
// Пройдись по масиву слів за допомогою циклу та порівняй довжину кожного слова з довжиною longestWord. Якщо знайдено слово, що довше, онови змінну longestWord.
// Поверни longestWord.
// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

const string = ("Виклик функції з випадковим рядком повертає правильне значення");
  // Change code below this line

  const strArr = string.split(" ");
console.log(strArr);
  let longestWord = strArr[0];
console.log("init word", longestWord);
      console.log("array l=", strArr.length);
  for (let i = 1; i < strArr.length; i += 1){
      console.log("i (word number) =", i);
      console.log("word length  = ", strArr[i].length);
      console.log(strArr[i]);
      if (longestWord.length < strArr[i].length) {
      longestWord = strArr[i];
    console.log(" --------------      longest = ", longestWord);
      }   
}
console.log("end.  -----------   longest = ", longestWord);
    

    //  --------------------   a21
// function findLongestWord(string) {
//   // Change code below this line
//   const strArr = string.split(" ");
//   let longestWord = strArr[0];
//   for (let i = 1; i < strArr.length; i += 1){
//     if (longestWord.length < strArr[i].length) {
//       longestWord = strArr[i];
//     }
//   }
// return longestWord;
//   // Change code above this line
// }